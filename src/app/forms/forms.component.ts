import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  
clr="red";

updateColor(event: any){
  this.clr=event.target.value;
  console.log(event.target.value);
  console.log("typing")
}

}
