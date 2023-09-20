import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { CounterComponent } from './counter/counter.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    CounterComponent,
    FormsComponent,
    BoxComponent,
    MovieComponent,
    MoviesListComponent,
    WelcomeComponent,
    AddMovieFormComponent,
    MovieDetailsPageComponent,
    EditMovieFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatBadgeModule,
    MatCardModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
