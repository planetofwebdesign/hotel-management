import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-occupants',
  templateUrl: './occupants.component.html',
  styleUrls: ['./occupants.component.css']
})
export class OccupantsComponent implements OnInit, OnChanges {

  @Input() selectedRooms: number;
  rooms: Array<number>;
  adults: Array<number> = [1,2,3,4,5,6];
  children: Array<number> = [1,2,3,4,5,6];
  model = {
    guests: []
  }
  
  
  constructor() { 
   
  }

  ngOnInit() {
  }
  ngOnChanges() {
    if(this.selectedRooms){
      this.model.guests = [];
      this.rooms = Array(this.selectedRooms).fill(0).map((x,i) => i); 
      this.rooms.forEach((room, index) => {
        let occupants = {
            adults : 0,
            children: 0
          }
        this.model.guests.push(occupants);
      });
    }
  }

  changeValue(label: string,i: number, value: number) {
   
    this.model.guests.forEach((guest,index)=> {
      if(i === index) {
        guest[label] = value;
      }
    });
  }

  checkAvailability() {
    console.dir(this.model);
  }
}
