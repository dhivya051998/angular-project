import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  show:any=true;
  constructor(public data:DataService) { }

  ngOnInit(): void {
     
  }
  remove(){
    this.show=false;
  }

}
