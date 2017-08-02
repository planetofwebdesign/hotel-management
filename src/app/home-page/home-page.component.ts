import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  rooms: Array<number> = [1,2,3,4,5,6,7,8,9,10];
  selectedRooms: number;
  constructor() { }

  ngOnInit() {
      this.selectedRooms = this.rooms[0];
  }

  

}
