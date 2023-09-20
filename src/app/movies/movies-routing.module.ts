import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';
import { EditMovieFormComponent } from '../edit-movie-form/edit-movie-form.component';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';

const routes: Routes = [

  { path: '', component: MoviesListComponent, pathMatch: 'full' },
  { path: 'add-movie-form', component: AddMovieFormComponent },
  { path: 'edit/:id', component: EditMovieFormComponent },
  { path: ':id', component: MovieDetailsPageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
