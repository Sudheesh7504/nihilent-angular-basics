import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../app.component'
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

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
    trailer: ''

  };

  @Input() idx: number = 0;
  // @Output() MrmIdx = new EventEmitter<number>();
  @Output() removeMovie = new EventEmitter();

  constructor(private router: Router, private movieService: MovieService) { }


  deleteMovie() {
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      console.log('Movie deleted successfully');
      this.removeMovie.emit();
    });
    // go refresh -> Parent
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
