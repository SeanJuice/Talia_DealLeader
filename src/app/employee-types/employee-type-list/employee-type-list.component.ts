import { Component, OnInit } from '@angular/core';
import { EmployeeTypeService } from 'src/app/shared/employee-type/employee-type.service';
import { EMPLOYEE_TYPE } from "src/app/shared/employee-type/employee-type";
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeetypelisthelpComponent } from './employeetypelisthelp/employeetypelisthelp/employeetypelisthelp.component';

@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.css']
})
export class EmployeeTypeListComponent implements OnInit {

  allEmployeeType: Observable<EMPLOYEE_TYPE[]>;
  SearchEmployeeType;
  errorMessage : string;
  showError: boolean;

  constructor(public service : EmployeeTypeService,
    public toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  /*ngOnInit(): void {
    this.service.refreshList();
  }*/
  ngOnInit(): void { 
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.getAllEmployeeType();
    }
  }

  getAllEmployeeType(){
    this.allEmployeeType = this.service.refreshList();
  }

  populateForm(at : EMPLOYEE_TYPE){
    this.service.formData = Object.assign({},at);
  }

  onDelete(id : number){
    if(confirm('Are you sure you want to delete this record?')){
      this.service.deleteEmployeeType(id).subscribe((res : any) =>{
        if (res.Error){
          this.getAllEmployeeType();
          this.errorMessage = res.Error;
          this.toastr.error('Cannot be deleted becuase it is being used', 'Employee Type');
          this.showError = true;
        }
        else{
          this.getAllEmployeeType();
          this.toastr.warning('Deleted Successfully', 'Employee Type');
          this.showError = false;
        }
      })
  }}

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmployeetypelisthelpComponent, dialogConfig);
  }

}
