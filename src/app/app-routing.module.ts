import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { BoxComponent } from './box/box.component';
import { Task2Component } from './task2/task2.component';
import { Task1Component } from './task1/task1.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'forms', component: FormsComponent },
  { path: 'add-movie-form', component: AddMovieFormComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsPageComponent },
  { path: 'movies/edit/:id', component: EditMovieFormComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
