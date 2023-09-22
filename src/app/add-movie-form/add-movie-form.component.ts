import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LANGUAGES, GENRES } from '../movie-details-page/global';




@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent {


  genres = GENRES;
  languages = LANGUAGES;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    featured: [false],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    releaseDate: ['', [Validators.required]],
    like: 0,
    dislike: 0,
    censorRating: ['', [Validators.required]],
    genres: [[], [Validators.required]],
    languages: [[], [Validators.required]],
    cast: this.fb.array([]),

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

  get cast() {
    return this.movieForm.get('cast') as FormArray;
  }

  addCastName(event: MatChipInputEvent) {
    const name = (event.value || '').trim();
    if (name) {
      this.cast.push(this.fb.control(name));
    }

    event.chipInput!.clear();
  }

  removeCastName(index: number) {
    this.cast.removeAt(index);
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