import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LeadService } from 'src/app/shared/lead.service';
import { Leaddetails } from 'src/app/shared/leaddeatils/leaddetails.model';
import { RfqhelpComponent } from './rfqhelp/rfqhelp/rfqhelp.component';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.css']
})
export class RfqComponent implements OnInit {
  leadDetails: Observable<Leaddetails[]>;
  RFQDetails: Observable<Leaddetails[]>;
  clicked = false;

  constructor(public router : Router,
    public service :  LeadService,
    public toastr : ToastrService,
    private currentRoute : ActivatedRoute,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{ 
      this.leadDetails = this.service.getLeadDetailsList(parseInt(localStorage.getItem("LEAD_ID")));

      let id = this.currentRoute.snapshot.paramMap.get('id');
      this.RFQDetails = this.service.getRFQList(parseInt(id));

      console.log(id)


    }
  }

  ReturnToLeadDetails(LEAD_ID: number){
    this.router.navigate(['/lead/edit/'+ LEAD_ID]);
  }

  submitQuote( SUP_ID, LEAD_ID, ProdName, Year, condition , quantity, event : MouseEvent){
    this.service.rfqSent(LEAD_ID);
    this.service.postRFQDetails(SUP_ID, LEAD_ID);
    this.service.sendEmail(ProdName, Year, condition , quantity);
    this.toastr.success('RFQ Submitted Successfully.', 'DealLeader.');
    (event.target as HTMLButtonElement).disabled = true;
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(RfqhelpComponent, dialogConfig);
  }
  
}
