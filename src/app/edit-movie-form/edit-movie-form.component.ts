import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie-form',
  templateUrl: './edit-movie-form.component.html',
  styleUrls: ['./edit-movie-form.component.css'],
})
export class EditMovieFormComponent {
  id: string = '';

  movie: Movie = {
    id: '',
    name: '',
    poster: '',
    rating: 0,
    summary: '',
    trailer: '',
    like: 0,
    dislike: 0,
    releaseDate: '',
    featured: false,
  };

  movieForm = this.fb.group({
    id: '',
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe((mv: any) => {
      console.log(mv);
      this.movieForm.patchValue(mv);
    });
  }

  get name() {
    return this.movieForm?.get('name');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }

  get poster() {
    return this.movieForm?.get('poster');
  }

  get summary() {
    return this.movieForm?.get('summary');
  }

  get trailer() {
    return this.movieForm?.get('trailer');
  }

  updateMovie() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const updatedMovie = this.movieForm.value;
      console.log(updatedMovie);
      // this.movieService.updateMovie(updatedMovie as Movie);

      this.movieService.updateMovie(updatedMovie as Movie, this.id).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}