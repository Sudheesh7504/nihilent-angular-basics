import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../app.component'
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {



  @Input() movie: Movie = {
    id: '',
    poster: '',
    name: "vikram",
    rating: 0,
    summary: "fcgjjgg",
    trailer: '',
    like: 0,
    dislike: 0,
    releaseDate: '',
    featured: false,

  };

  @Input() idx: number = 0;
  // @Output() MrmIdx = new EventEmitter<number>();
  @Output() removeMovie = new EventEmitter();
  likeSubject = new Subject<number>();
  disLikeSubject = new Subject<number>();



  constructor(private router: Router, private movieService: MovieService) {
    this.likeSubject.pipe(debounceTime(2000),
      switchMap((likeCount) => {
        this.movie = { ...this.movie, like: likeCount }
        return this.movieService.updateMovie(this.movie, this.movie.id);
      })).subscribe();

    this.disLikeSubject.pipe(debounceTime(2000),
      switchMap((dislikeCount) => {
        this.movie = { ...this.movie, dislike: dislikeCount }
        return this.movieService.updateMovie(this.movie, this.movie.id);
      })).subscribe();

  }


  deleteMovie() {
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      console.log('Movie deleted successfully');
      this.removeMovie.emit();
    });
    // go refresh -> Parent
  }

  updateLikes(likeCount: number) {

    this.likeSubject.next(likeCount);

  }

  updateDislikes(dislikeCount: number) {
    this.disLikeSubject.next(dislikeCount);

  }

  editMovie() {
    this.router.navigate(['/movies/edit', this.movie.id]);
  }

  show = true;
  toggleSummary() {
    this.show = !this.show;
  }




  getdetails() {
    this.router.navigate(['/movies', this.movie.id]);
  }






}
