import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/shared/condition/condition.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConditionhelpComponent } from './conditionhelp/conditionhelp/conditionhelp.component';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  errorMessage : string;
  showError: boolean;

  constructor(public service : ConditionService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

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
      CONDITION_ID : null,
      CONDITION_NAME :"",
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
          this.toastr.error('This condition already exists', 'Condition');
          this.showError = true;
        }
        else{
          this.toastr.success('Inserted Successfully.','Condition');
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
    this.dialog.open(ConditionhelpComponent, dialogConfig);
  }

}
