import { Injectable } from '@angular/core';
import { Movie } from './app.component';
import { HttpClient } from '@angular/common/http';


//singleton
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Array<Movie> = [

  ]



  constructor(private http: HttpClient) { }


  getMovieListFromMockAPI() {
    return this.http.get<Movie[]>(
      'https://64f6f41a9d7754084952d870.mockapi.io/movies'
    );
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `https://64f6f41a9d7754084952d870.mockapi.io/movies/${id}`
    );
  }

  deleteMovieById(id: string) {
    return this.http.delete<Movie>(
      `https://64f6f41a9d7754084952d870.mockapi.io/movies/${id}`
    );
  }

  createMovie(newMovie: Movie) {
    return this.http.post(
      `https://64f6f41a9d7754084952d870.mockapi.io/movies`,
      newMovie
    );
  }

  updateMovie(updatedMovie: Movie, id: string) {
    return this.http.put(
      `https://64f6f41a9d7754084952d870.mockapi.io/movies/${id}`,
      updatedMovie

    );


  }

  searchMovieList(name: string) {
    return this.http.get<Movie[]>(
      `https://64f6f41a9d7754084952d870.mockapi.io/movies?search=${name}`
    );
  }

  setMovieList(newMovie: Movie) {
    this.movies.push(newMovie);
  }
  //encapsulation
  getMovies() {
    return this.movies;
  }

  setMovies(newMovie: Movie) {
    this.movies.push(newMovie);

  }


}
