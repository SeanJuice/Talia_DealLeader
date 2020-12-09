import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LeadService } from 'src/app/shared/lead.service';
import { AgentleadsHelpComponent } from './agentleads-help/agentleads-help/agentleads-help.component';

@Component({
  selector: 'app-agent-leads',
  templateUrl: './agent-leads.component.html',
  styleUrls: ['./agent-leads.component.css']
})
export class AgentLeadsComponent implements OnInit {
  agentLeadList;
  SearchAgentLead;

  constructor(public service : LeadService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.refreshList();
    }
  }

  formData

  refreshList(){
    this.service.getAgentLeadList().then(res => this.agentLeadList = res);
  }

  leadDeatils(LEAD_ID : number){
    this.router.navigate(['/agentleads/edit/'+ LEAD_ID]);
    console.log(LEAD_ID)
  }

  CancelLead(LEAD_ID){
    console.log(LEAD_ID)
    this.service.CancelLead(LEAD_ID);
    window.location.reload();
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AgentleadsHelpComponent, dialogConfig);
  }

}
