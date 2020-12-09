import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agentmeeting } from 'src/app/shared/agentmeeting';

@Component({
  selector: 'app-viewmeeting',
  templateUrl: './viewmeeting.component.html',
  styleUrls: ['./viewmeeting.component.css']
})
export class ViewmeetingComponent implements OnInit {
  agentMeetingDetails: Observable<Agentmeeting[]>;


  constructor(public router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
    }
  }

  // getAgentMeeting()

}
