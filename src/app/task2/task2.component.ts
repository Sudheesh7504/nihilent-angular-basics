import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../app.component'

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  @Input() movie: Movie = {
    src: '',
    name: "vikram",
    rating: 8.4,
    summary: "fcgjjgg"

  };

  @Input() idx: number = 0;
  @Output() MrmIdx = new EventEmitter<number>();

  delete() {
    this.MrmIdx.emit(this.idx);
  }



}
