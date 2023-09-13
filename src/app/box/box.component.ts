import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() clr:string="";
  @Input() idx:number=0;
  @Output() rmClrIdx=new EventEmitter<number>();

  delete(){
    console.log('deleting box...',this.idx);
    this.rmClrIdx.emit(this.idx);
  }

}
