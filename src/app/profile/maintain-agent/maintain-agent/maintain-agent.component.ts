import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import { AgentService } from 'src/app/shared/agent.service';
import { Agenttype } from 'src/app/shared/agenttype.model';
import { AgenttypeService } from 'src/app/shared/agenttype.service';
import { Country } from 'src/app/shared/country.model';
import { CountryService } from 'src/app/shared/country.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-maintain-agent',
  templateUrl: './maintain-agent.component.html',
  styleUrls: ['./maintain-agent.component.css']
})
export class MaintainAgentComponent implements OnInit {
  formData: User;
  countryList: Country[];
  agenttypeList: Agenttype[];

  constructor(    public countryService: CountryService,
    public agenttypeService: AgenttypeService,
    public userService : UserService,
    public toastr : ToastrService,
    public service: AgentService,
    public router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.countryService.getCountryList().then(res => this.countryList = res as Country[]);
      this.agenttypeService.getAgenttypeList().then(res => this.agenttypeList = res as Agenttype[]);
    }
  }

  resetForm(form?:NgForm){
    if (form != null)
    form.resetForm();
    this.userService.formData= {
      AGENT_ID: null,
      AGENT_STATUS_ID: 1,
      AGENT_TYPE_ID: null,
      COUNTRY_ID: null,
      TITLE_ID: null,
      AGENT_NAME: '',
      AGENT_SURNAME: '',
      AGENT_ID_NO: '',
      AGENT_PASSPORT_NO: '',
      AGENT_COMPANY_NAME: '',
      AGENT_COMPANY_REGISTRATION: '',
      AGENT_CONTACT_NO: '',
      AGENT_EMAIL_ADDRESS: '',
      USER_ID : parseInt(localStorage.getItem("USER_ID")),
      USERNAME : '',
      PASSWORD : '',
      USER_ROLE_ID : null,
      fileName: "",
      postedFile: null

    }
  }

  
  onSubmit(form : NgForm){
    this.updateRecord(form);
  }
  
  updateRecord(form: NgForm){
    if(confirm('Are you sure you want to update this record?')){
    this.agenttypeService.update(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully.','Agent');
      this.resetForm(form);
    })
  }
}

}
