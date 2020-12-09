import { Component, OnInit } from '@angular/core';
import { CommissionService } from 'src/app/shared/commission/commission.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Commission } from 'src/app/shared/commission/commission.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcommissionhelpComponent } from './addcommissionhelp/addcommissionhelp/addcommissionhelp.component';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {
  commissionForm : FormGroup;
  errorMessage : string;
  showError: boolean;

  constructor(public service : CommissionService,
    private toastr : ToastrService,
    public router : Router,
    public fb: FormBuilder,
    public dialog: MatDialog,) { 
      this.commissionForm = this.fb.group({
        COMMISSION_PERCENTAGE: [''], 
        COMMISSION_DATE: [''],
      })
    }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.resetForm();
    }
  } 

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      COMMISSION_ID : null,
      COMMISSION_PERCENTAGE: null,
      COMMISSION_DATE : null,
    };
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
      this.service.create(form.value).subscribe((res: any) => {
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This commission already exists', 'Commission');
          this.showError = true;
        }
        else{
          this.toastr.success('Inserted Successfully.','Commission');
          this.resetForm(form);
          this.service.refreshList();
        }
      });
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddcommissionhelpComponent, dialogConfig);
  }
}