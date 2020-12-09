import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Leaddetails } from 'src/app/shared/leaddeatils/leaddetails.model';
import { LeadService } from 'src/app/shared/lead.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgentleaddetailsHelpComponent } from './agentleaddetails-help/agentleaddetails-help/agentleaddetails-help.component';

@Component({
  selector: 'app-agentleaddeatils',
  templateUrl: './agentleaddeatils.component.html',
  styleUrls: ['./agentleaddeatils.component.css']
})
export class AgentleaddeatilsComponent implements OnInit {
  leadDetails: Observable<Leaddetails[]>;

  constructor(public service : LeadService,
    public router : Router,
    private currentRoute : ActivatedRoute,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      let id = this.currentRoute.snapshot.paramMap.get('id');
      this.leadDetails = this.service.getLeadDetailsList(parseInt(id));
      console.log(this.leadDetails);
      console.log(id)
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AgentleaddetailsHelpComponent, dialogConfig);
  }

  }
