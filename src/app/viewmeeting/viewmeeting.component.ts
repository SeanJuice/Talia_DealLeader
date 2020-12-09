import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Agentmeeting } from '../shared/agentmeeting';
import { LeadService } from '../shared/lead.service';

@Component({
  selector: 'app-viewmeeting',
  templateUrl: './viewmeeting.component.html',
  styleUrls: ['./viewmeeting.component.css']
})
export class ViewmeetingComponent implements OnInit {
  agentMeetingDetails: Observable<Agentmeeting[]>;

  constructor(public router : Router,
    public service : LeadService,
    private currentRoute : ActivatedRoute,) { }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{ 
        let id = this.currentRoute.snapshot.paramMap.get('id');
        this.agentMeetingDetails = this.service.getAgentMeeting(parseInt(id));
      }
    }

    accept(LEAD_ID){
      console.log(LEAD_ID)
      this.service.acceptMeeting(LEAD_ID);
      window.location.reload();
    }

    reschedule(LEAD_ID){
      console.log(LEAD_ID)
      this.service.rescheduleMeeting(LEAD_ID);
      window.location.reload();
    }

    
    
    
    
    

}
