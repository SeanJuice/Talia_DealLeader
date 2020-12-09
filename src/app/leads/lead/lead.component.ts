import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/app/shared/lead.service';
import { CountryService } from 'src/app/shared/country.service';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/shared/country.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeadItemsComponent } from '../lead-items/lead-items.component';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { LeadhelpComponent } from './leadhelp/leadhelp/leadhelp.component';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styles: [
  ]
})
export class LeadComponent implements OnInit {
  countryList: Country[];
  isValid : boolean = true;

  constructor(public service : LeadService,
    public dialog: MatDialog,
    public countryService: CountryService,
    public toastr : ToastrService,
    public router : Router,
    public currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      let LEAD_ID = this.currentRoute.snapshot.paramMap.get('id');
      if(LEAD_ID == null)
      this.resetForm();
      else{
        this.service.getLeadById(parseInt(LEAD_ID)).then(res => {
          this.service.formData = res.lead;
          this.service.leadItems = res.leadDetails;
        });
      }
      this.countryService.getCountryList().then(res => this.countryList = res as Country[]);
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      LEAD_ID : null,
      COUNTRY_ID : null,
      COUNTRY_NAME: '',
      LEAD_STATUS_NAME: '',
      LEAD_STATUS_ID : 1,
      AGENT_ID : parseInt(localStorage.getItem("AgentID")),
      EMPLOYEE_ID : null,
      BUDGET_APPROVED : '',
      CONTRACT_TIME : '',
      LEAD_TIME : '',
      INSPECTION : '',
    };
    this.service.leadItems = [];
  }

  AddOrEditLeadItem(leadItemIndex, LEAD_ID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {leadItemIndex, LEAD_ID}
    console.log(leadItemIndex)
    this.dialog.open(LeadItemsComponent, dialogConfig);
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(LeadhelpComponent, dialogConfig);
  }


  onDeleteLeadItem(LEAD_ID : number, i : number){
    this.service.leadItems.splice(i,1);
  }


  onSubmit(form : NgForm){
    this.service.saveOrUpdateLead().subscribe(res =>{
      this.resetForm(form);
      this.toastr.success('Lead Submitted Successfully.', 'DealLeader.');
    })
  }

}
