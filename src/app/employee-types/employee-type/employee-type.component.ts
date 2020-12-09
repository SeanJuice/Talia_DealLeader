import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmployeeTypeService } from 'src/app/shared/employee-type/employee-type.service';
import { EMPLOYEE_TYPE } from "src/app/shared/employee-type/employee-type";
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeetypehelpComponent } from './employeetypehelp/employeetypehelp/employeetypehelp.component';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.css']
})
export class EmployeeTypeComponent implements OnInit {

  allEmployeeType: Observable<EMPLOYEE_TYPE[]>;
  errorMessage : string;
  showError: boolean;

  constructor(public service : EmployeeTypeService,
    private toastr : ToastrService,
    public router :Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.resetForm();
    }
  }

  getAllEmployeeType(){
    this.allEmployeeType = this.service.refreshList();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      EMPLOYEE_TYPE_ID: null,
      EMPLOYEE_TYPE_NAME: '',
    };
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
    
  }

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
      this.service.postEmployeeType(form.value).subscribe((res: any) => {
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This employee type already exists', 'Employee Type');
          this.showError = true;
        }
        else{
          this.toastr.success('Added Successfully.','Employee Type');
          this.resetForm(form);
          this.getAllEmployeeType();
          this.showError = false;
        }
      
      });
     
  }}

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmployeetypehelpComponent, dialogConfig);
  }


}
