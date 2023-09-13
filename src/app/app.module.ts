import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { CounterComponent } from './counter/counter.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    CounterComponent,
    FormsComponent,
    BoxComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
