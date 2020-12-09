import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/app/shared/lead.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeadItem } from 'src/app/shared/lead-item.model';
import { Observable } from 'rxjs';
import { Leaddetails } from 'src/app/shared/leaddeatils/leaddetails.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeaddetailsHelpComponent } from './leaddetails-help/leaddetails-help/leaddetails-help.component';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit {
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
      localStorage.setItem("LEAD_ID", id);
      }
    }

    populateForm(at : Leaddetails){
      this.service.dataForm = Object.assign({},at);
    }

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(LeaddetailsHelpComponent, dialogConfig);
    }
  }


