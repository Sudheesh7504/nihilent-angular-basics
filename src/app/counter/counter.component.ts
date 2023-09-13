import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 like=0; //member variable
  increment(){//class method
    console.log("count")
    this.like++;
   
  }

  dislike=0;
  Decrement(){
    console.log("count")
    this.dislike++;
  }

  get total(){
    return this.like+this.dislike;
  }

get msg(){
  return this.like-this.dislike>=10;
  

}


}
