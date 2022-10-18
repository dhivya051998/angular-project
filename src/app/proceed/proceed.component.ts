import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {
  @Input() ele!:any;
  @Input() dataele!:any;
  @Input() element!:any;
  index:any;
  // show:any=true;
  constructor(public data:DataService) { }
  ngOnInit(): void {
  }
  hide(e:any,dataele:any){
   this.index=this.dataele;
   this.data.newArray.push(this.index);
  //  this.show=false;
   this.data.proceedShow=false;
   this.element.style.backgroundColor="#80808078";
   this.element.style.pointerEvents='none';
  }

}
