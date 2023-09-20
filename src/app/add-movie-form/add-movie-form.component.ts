import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent {
  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    featured: [false],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    releaseDate: ['', [Validators.required]],
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

  movieList;

  // DI - Dependency Injection
  constructor(
    private movieService: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieList = movieService.getMovies();
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





  addMovie() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      console.log(newMovie);
      // this.movieService.setMovieList(newMovie as Movie);
      this.movieService.createMovie(newMovie as Movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}