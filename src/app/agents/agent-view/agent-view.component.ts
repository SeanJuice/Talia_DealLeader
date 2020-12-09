import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/agent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent} from 'src/app/shared/agent.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewhelpComponent } from './viewhelp/viewhelp/viewhelp.component';


@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent implements OnInit {


  agentDetails : Observable<Agent[]>;
  ur : any;



  constructor(public service : AgentService,
    private toastr : ToastrService,
    public currentRoute: ActivatedRoute,
    public router : Router
  ,
  public dialog: MatDialog,) { }

  ngOnInit() {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      let id = this.currentRoute.snapshot.paramMap.get('id');
      this.agentDetails = this.service.getAgentDetailsList(parseInt(id));
      console.log(this.agentDetails);
      console.log(id)
      localStorage.setItem("AGENT_ID", id);
      localStorage.setItem("USER_ID", this.ur);
    }
}


acceptAgentRFR(AGENT_ID, USER_ID){
  this.service.acceptAgentRFR(AGENT_ID);
      this.service.postSms().subscribe(res => {
        this.toastr.success('Send Successfully.','SMS');
    });
    this.service.updateUR(USER_ID);
    this.toastr.success('User Access Granted Successfully', 'Request for registration')
    window.location.reload();
}

declineAgentRFR(AGENT_ID){
  this.service.declineAgentRFR(AGENT_ID);
  window.location.reload();
    this.service.postSms().subscribe(res => {
      this.toastr.success('Send Successfully.','SMS');
  });
} 


openInfo(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  this.dialog.open(ViewhelpComponent, dialogConfig);
}
}
