import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  @Input() decdetails!:any
  newArray:any=[];
  newArray1:any=[];
  index:any;
  ele:any;
  constructor(public data:DataService) { }
  ngOnInit(): void {
    this.newArray=this.data.newArray1;

  }
  booking(e:any,i:any){
    this.ele=e.target;
    this.index=i+1;
    this.ele.style.backgroundColor="#f1a9a0";
    this.ele.innerText="L"+this.index;
    this.ele.style.justifyContent="center";
    this.ele.style.color="#fff";
    // let ele=e.target as HTMLElement;
    this.data.proceedShow=true;
    // ele.removeEventListener('click',this.booking)
  }

}
