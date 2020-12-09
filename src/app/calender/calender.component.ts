import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventSourceInput, EventInput, Calendar, EventApi } from '@fullcalendar/angular';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DatedialogComponent } from './datedialog/datedialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingService } from '../shared/meeting.service'
import { StringifyOptions } from 'querystring';
import { BnNgIdleService } from 'bn-ng-idle';
import { UserIdleModule, UserIdleService } from 'angular-user-idle';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Leaddetails } from '../shared/leaddeatils/leaddetails.model';
import { LeadService } from '../shared/lead.service';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  leadDetails: Observable<Leaddetails[]>;


  constructor(public dialog: MatDialog,
    private router: Router,
    private meeting: MeetingService,
    private userIdle: UserIdleService,
    private currentRoute : ActivatedRoute,
    public service : LeadService,) { }

  test: string;
  test2: string;

  data: any;
  array:EventInput[] = [];

calender: Calendar


ngOnInit(): void {
  if (!localStorage.getItem("accessToken")){
    this.router.navigate([""]);
  }
  else{
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.leadDetails = this.service.getLeadDetailsList(parseInt(id));
    localStorage.setItem("LEAD_ID", id);
    this.data = this.meeting.getSchedule().toPromise().then(response => {
 //   this.array = response;
      console.log(response)
      var data =  Object.keys(response).map(key=>{
        console.log(response[key])

        this.array.push(response[key])

      })
      this.data =  data
      console.log(data)
});
this.loadEvents();
  }
}



calendarOptions: CalendarOptions = {
  displayEventTime : false,
    initialView: 'dayGridMonth',
    weekends: false,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    initialEvents:  this.array,
    editable:true,
    /* [//this.array
     { title: 'event 1', date: '2020-10-01'},
      { title: 'event 2', date: '2020-10-05' },
    ]
 */
    //let title = data["Chart"].map((c)=>c.)
  }

  loadEvents(){
    this.calender.addEventSource(this.array);
  }

  handleDateClick(arg) {
    let time = "15:00";
    let time2    = moment(time, 'HH:mm');
    localStorage["Date2"] = moment(arg.date).set({
      hour:   time2.get('hour'),
      minute: time2.get('minute'),
      second: time2.get('second')
    }).format("YYYY-MM-DD")
    localStorage["Date"] = arg.date;
    // this.router.navigate(["slots/" + localStorage.getItem("LEAD_ID")]);
    this.openInfo();


}

function(event) {
  this.openInfo();


}

openInfo(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  this.dialog.open(DatedialogComponent, dialogConfig);
}

}


