import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
@Input() src="";
@Input() name="";
@Input() rating="";
@Input() plot="";
}
