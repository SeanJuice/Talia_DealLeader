import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmployeeTypeService } from 'src/app/shared/employee-type/employee-type.service';
import { EMPLOYEE_TYPE } from "src/app/shared/employee-type/employee-type";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeetypeshelpComponent } from './employeetypeshelp/employeetypeshelp/employeetypeshelp.component';

@Component({
  selector: 'app-employee-types',
  templateUrl: './employee-types.component.html',
  styleUrls: ['./employee-types.component.css']
})
export class EmployeeTypesComponent implements OnInit {

  allEmployeeType: Observable<EMPLOYEE_TYPE[]>;

  constructor(public service : EmployeeTypeService,
    private toastr : ToastrService,
    public router :Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
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
    // if(form.value.EMPLOYEE_TYPE_ID !=null)
    this.updateRecord(form);
  }
  
  updateRecord(form: NgForm){
    if(confirm('Are you sure you want to update this record?')){
      this.service.putEmployeeType(form.value).subscribe(res => {
        this.toastr.info('Updated Successfully.','Employee Type');
        this.resetForm(form);
        this.service.refreshList();
      })
  }}

  
  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmployeetypeshelpComponent, dialogConfig);
  }

}
