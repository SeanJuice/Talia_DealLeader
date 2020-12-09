import { Component, OnInit } from '@angular/core';
import { AgentService } from '../shared/agent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginuserService } from '../shared/loginuser/loginuser.service';
import { Agent } from '../shared/agent.model';
import { Observable } from 'rxjs';
import { User } from '../shared/user/user.model';
import { AgentleaddeatilsComponent } from '../LoginNew/agent-leads/agentleaddeatils/agentleaddeatils.component';
import { CountryService } from '../shared/country.service';
import { AgenttypeService } from '../shared/agenttype.service';
import { Agenttype } from '../shared/agenttype.model';
import { Country } from '../shared/country.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  agentDetails : Observable<Agent[]>
  agent;  
  agenttypeList: Agenttype[];
  countryList: Country[];
  

  constructor(public service: AgentService,
    public router : Router,
    public countryService: CountryService,
    public agenttypeService: AgenttypeService,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.countryService.getCountryList().then(res => this.countryList = res as Country[]);
      this.agenttypeService.getAgenttypeList().then(res => this.agenttypeList = res as Agenttype[]);
      this.agentDetails = this.service.getAgentList();
    }
  }

  populateForm(at : Agent){
    this.service.formData = Object.assign({},at);
    console.log(this.service.formData)
  }
}
