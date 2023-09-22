import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from '../app.component';
import { Subscription } from 'rxjs';
import { LANGUAGES, GENRES } from './global';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent {
  id: string = '';
  movie: any;


  movies: Array<Movie> = [];
  getMovieById: Subscription | any;
  constructor(private router: ActivatedRoute, private movieService: MovieService, private sanitizer: DomSanitizer) {
    const { id } = this.router.snapshot.params;
    this.id = id;

    // this.movie = movieService.getMovies().find((mv) => mv.id === this.id);
    // this.movie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);


    console.log(movieService.getMovies());
    console.log(this.id);


  }

  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe((mv: any) => {
      console.log(mv);
      this.movie = mv;
      this.movie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(mv.trailer);


    })
  }

  show = true;
  toggleSummary() {
    this.show = !this.show;
  }

  getLabelLanguages(movie: any) {
    return movie.languages?.map(
      (lang: string) => LANGUAGES.find((data) => data.value === lang)?.label
    );
  }

  getLabelGenres(movie: any) {
    return movie.genres?.map(
      (lang: string) => GENRES.find((data) => data.value === lang)?.label
    );
  }

}
