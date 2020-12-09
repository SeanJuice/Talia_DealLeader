import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AgentService } from '../shared/agent.service';
import { Agenttype } from '../shared/agenttype.model';
import { AgenttypeService } from '../shared/agenttype.service';
import { Country } from '../shared/country.model';
import { CountryService } from '../shared/country.service';
import { EMPLOYEE } from '../shared/employee/employee.model';
import { EmployeeService } from '../shared/employee/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employeeDetails : Observable<EMPLOYEE[]>
  agent;  
  agenttypeList: Agenttype[];
  countryList: Country[];

  constructor(public service: EmployeeService,
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
      this.employeeDetails = this.service.getEmployeeList();
    }
  }

  populateForm(at : EMPLOYEE){
    this.service.formData = Object.assign({},at);
  }

}
