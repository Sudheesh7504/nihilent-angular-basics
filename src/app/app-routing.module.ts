import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { BoxComponent } from './box/box.component';
import { Task2Component } from './task2/task2.component';
import { Task1Component } from './task1/task1.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent,pathMatch:'full'},
  {path:'forms',component:FormsComponent},
  {path:'add-movie-form',component:AddMovieFormComponent},
  {path:'movies',component:MoviesListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
  
 }
