import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';
import { EditMovieFormComponent } from '../edit-movie-form/edit-movie-form.component';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { Task2Component } from '../task2/task2.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CounterComponent } from '../counter/counter.component';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [

    Task2Component,
    MoviesListComponent,
    AddMovieFormComponent,




    MovieDetailsPageComponent,
    EditMovieFormComponent,
    CounterComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatSlideToggleModule,
    MatBadgeModule
  ]
})
export class MoviesModule { }
