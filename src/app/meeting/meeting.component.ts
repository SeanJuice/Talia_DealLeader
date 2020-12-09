import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/shared/meeting.service';
import { NgForm, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { MeetingtypeService } from './shared/meetingtype.service';
import { Observable } from 'rxjs';
import { MEETING } from '../shared/meeting.model';
import * as moment from 'moment';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetingForm: any;
  dataSaved = false;
  Date: string;
  Start: string;
  End: string;
  allMeetings: Observable<MEETING[]>;
  MEETING_TYPE: any;

  constructor(public service: MeetingService,
     private toastr: ToastrService, private router: Router, 
     ) { }

  ngOnInit() {
    this.Date = localStorage["Date"];
    this.Start = localStorage["START_TIME"];
    this.End = localStorage["END_TIME"];

    // this.DisplayMeetingType();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      MEETING_ID: null,
      MEETING_LOCATION: "",
      MEETING_TYPE_ID: null,
      DATE: "",
      MEETING_SLOT_ID: null,
      LEAD_ID: null
    };
  }

  onSubmit(form: NgForm) {
    form.value.MEETING_SLOT_ID = localStorage["Slot_ID"];

    console.log()
    if (form.value.MEETING_ID == null) {
      let time2 = moment(form.value.START_DATE, 'HH:mm').utc();
      form.value.START_DATE = moment(this.Date).set({
        hour: time2.get('hour'),
        minute: time2.get('minute'),
        second: time2.get('second')
      }).format("YYYY-MM-DD HH:mm:ss")

      let time3 = moment(form.value.END_DATE, 'HH:mm');
      form.value.END_DATE = moment(this.Date).set({
        hour: time3.get('hour'),
        minute: time3.get('minute'),
        second: time3.get('second')
      }).format("YYYY-MM-DD HH:mm:ss")
      //console.log(form.value)
     this.insertRecord(form);
     confirm('Meeting Successfully booked.');
     this.router.navigate(["calender"]);
    }
    const MeetingType = this.meetingForm.value;
  }

  insertRecord(form: NgForm) {
    if (confirm('Are you sure you want to add this record?')) {
      form.value.MEETING_SLOT_ID = localStorage["Slot_ID"];
      form.value.Date = localStorage["Date2"];

      console.log(form.value);
      this.service.postMeeting(form.value).subscribe(res => {
        this.toastr.success('Added Successfully.', 'Meeting');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  }

  GoBack() {
    this.router.navigate(["calender"]);
  }

  // DisplayMeetingType() {
  //   this.meetingtypeservice.getAllMeetingType().subscribe(data => {
  //     this.MEETING_TYPE = data;
  //     console.log(data);
  //   },
  //     error => {
  //       console.log(error);
  //     });
  // }

}