import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agent } from '../shared/agent.model';
import { AgentService } from '../shared/agent.service';
import { EMPLOYEE } from '../shared/employee/employee.model';
import { EmployeeService } from '../shared/employee/employee.service';
import { LoginuserService } from '../shared/loginuser/loginuser.service';

@Component({
  selector: 'app-agent-landing-page',
  templateUrl: './agent-landing-page.component.html',
  styleUrls: ['./agent-landing-page.component.css']
})
export class AgentLandingPageComponent implements OnInit {
  session : any;
  user: any;
  AgentDetails: Observable<Agent[]>;
  imageUrl : string = "/assets/4.JPG";
  employeeDetails : Observable<EMPLOYEE[]>


  constructor(public router : Router,
    public service : LoginuserService,
    public agentService: AgentService,
    public employee : EmployeeService,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.router.navigate(['/agentlanding']);
      this.AgentDetails = this.agentService.getAgentList();
      this.employeeDetails = this.employee.getEmployeeList();
    }
  }

}
