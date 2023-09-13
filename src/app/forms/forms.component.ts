import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
[x: string]: any;

clr="red";



// updateColor(event: any){
//   this.clr=event.target.value;
//   console.log(event.target.value);
//   console.log("typing")
// }

colorList=['orange','blue','green','yellow'];

addColor(){
 
   this.colorList.push(this.clr);

}

delete(idx:number){
  this.colorList.splice(idx,1);
  
}


}
