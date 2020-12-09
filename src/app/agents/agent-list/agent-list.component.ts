import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/agent.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Agent } from 'src/app/shared/agent.model';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { AgentStatusService } from 'src/app/shared/Tina/agentstatus.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgentlistHelpComponent } from './agentlist-help/agentlist-help/agentlist-help.component';


@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgentListComponent  {

  dataArray: Observable<Agent[]>;
  data$;
  currentRoute: any;
  SearchAgentList

  constructor(
    public service : AgentService,
    public toastr : ToastrService,
    public router: Router,
    public serviceAS: AgentStatusService,
    public dialog: MatDialog,) { }

    ngOnInit() {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
        this.loadAllAgents();
        this.data$ = this.getStatus();
        
      }
    }
    loadAllAgents(){
      this.dataArray = this.service.getData();
    }
    getStatus() {
      return this.serviceAS.refreshList();
    }


   
    populateForm(at : Agent){
      this.service.formData = Object.assign({},at);
    }
    
    resetForm(form? : NgForm){
      if(form != null)
      form.resetForm();
      this.service.formData = {
        AGENT_ID: null,
        AGENT_STATUS_ID: null,
        AGENT_TYPE_ID: null,
        TITLE_ID: null,
        COUNTRY_ID: null,
        AGENT_NAME:"",
        AGENT_SURNAME: "",
        AGENT_ID_NO: "",
        AGENT_PASSPORT_NO: "",
        AGENT_COMPANY_REGISTRATION: "",
        AGENT_COMPANY_NAME: "",
        AGENT_CONTACT_NO: "",
        AGENT_EMAIL_ADDRESS:"",
      };
    }
  
    onSubmit(form : NgForm){
      if(form.value.AGENT_ID !=null){
        this.updateRecord(form);
      }
        
    }
    
    updateRecord(form: NgForm){
      if(confirm('Are you sure you want to change this status?')){
        this.service.putAgent(form.value).subscribe(res => {
        this.toastr.warning('Updated Successfully.','Agent');
        this.resetForm(form);
        this.service.getData();
      })
    }}

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(AgentlistHelpComponent, dialogConfig);
    }

    

    openOrEdit(AGENT_ID : number){
      this.router.navigate(['/viewagent/'+ AGENT_ID]);
    }
}
