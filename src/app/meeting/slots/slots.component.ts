import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/shared/meeting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  allSlots: any;
  Date: string;


  constructor(public service: MeetingService, private router: Router) { }

  ngOnInit(){
    this.Date = localStorage["Date"];

    this.service.getSlots(localStorage["Date2"]).subscribe(data => {
      this.allSlots = data;
      console.log(data);
  });
  }

  slots(id, start, end){
    localStorage["Slot_ID"] = id;
    localStorage["START_TIME"] = start;
    localStorage["END_TIME"] = end;

    this.router.navigate(["meeting"]);
  }

  delete(id){
    this.service.delete(id).subscribe(data => {
      console.log(data);
  });
  this.router.navigate(["calender"]);
  }

  reschedule(id){
    localStorage["MEETING_ID"] = id;
    this.router.navigate(["calender"]);
  }
}
