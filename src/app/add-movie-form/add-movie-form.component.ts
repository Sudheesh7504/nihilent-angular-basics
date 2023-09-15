import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {

  src: string = '';
  name: string = '';
  rating: number | '' = '';
  summary: string = '';
  movies;

  //DI-dependency Injection
  constructor(private movieServie: MovieService) {
    this.movies = movieServie.getMovies();
  }



  addMovie() {
    const newMovie: Movie = {
      src: this.src,
      name: this.name,
      rating: this.rating,
      summary: this.summary,
    };
    this.movieServie.setMovies(newMovie);

  }
}
