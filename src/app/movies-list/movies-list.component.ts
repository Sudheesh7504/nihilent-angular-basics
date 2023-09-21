import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../app.component';

import { FormBuilder } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  // @Input() movies: Movie[] = [];


  searchForm = this.fb.group({
    search: '',
  });

  get search() {
    return this.searchForm.get('search');
  }

  delete(idx: number) {
    this.movies.splice(idx, 1);
  }


  movies: Array<Movie> = [];
  getMovieList: Subscription | any;
  constructor(private movieService: MovieService, private fb: FormBuilder) { }

  // Life cycle Methods
  // Constructor vs ngOnInit
  // 1. Input & Output -> values ❌ -> constructor
  // 2. If error happens constructor -> nothing screen
  // 3. Easy testing
  // 4. Organizing
  ngOnInit() {
    this.search?.valueChanges
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        switchMap((name) => this.movieService.searchMovieList(name || ''))
      )
      .subscribe((mvList) => {
        this.movies = mvList;
      });
    this.loadMoviesData();
  }

  loadMoviesData() {
    this.getMovieList = this.movieService
      .getMovieListFromMockAPI()
      .subscribe((mvList) => {
        this.movies = mvList;
      });
  }

  ngOnDestroy() {
    console.log('Destory');
    this.getMovieList.unsubscribe();
  }
}




  // @Input() idx: number = 0;
  // @Output() MrmIdx = new EventEmitter<number>();
  // delete() {
  //   this.MrmIdx.emit(this.idx);
  // }








