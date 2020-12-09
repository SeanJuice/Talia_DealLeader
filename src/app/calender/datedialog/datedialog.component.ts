import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ToastrService } from 'ngx-toastr';
import { LeadService } from 'src/app/shared/lead.service';

@Component({
  selector: 'app-datedialog',
  templateUrl: './datedialog.component.html',
  styleUrls: ['./datedialog.component.css']
})
export class DatedialogComponent implements OnInit {
  Date : string = localStorage.getItem("Date2"); 
  startTime: Date = new Date();
  endTime: Date = new Date();
  MEETING_TYPE_ID: number;
  MEETING_LOCATION : string;
  LEAD_ID : number = parseInt(localStorage.getItem("LEAD_ID"))

  constructor(
    public dialogRef: MatDialogRef<DatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public service : LeadService,
    public router : Router,
    public toastr : ToastrService
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.Date = localStorage["Date2"];
    }
  }

  bookMeeting(start, end, MEETING_TYPE_ID, MEETING_LOCATION, LEAD_ID, Date){
    // this.service.QuoteCaptured(LEAD_ID);
    console.log(start, end, MEETING_TYPE_ID, MEETING_LOCATION, LEAD_ID, Date)
    this.service.postMeetingDetails(start, end, MEETING_TYPE_ID, MEETING_LOCATION, LEAD_ID, Date);
    this.dialogRef.close();
    this.toastr.success('Meeting Booked Submitted Successfully.', 'DealLeader.');
    this.service.meetingBooked(LEAD_ID);
    window.location.reload();
  }


}
