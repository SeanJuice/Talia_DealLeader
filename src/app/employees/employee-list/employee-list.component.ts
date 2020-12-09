import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee/employee.service';
import { EMPLOYEE } from 'src/app/shared/employee/employee.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EMPLOYEE_TYPE } from 'src/app/shared/employee-type/employee-type';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/agent.service';

import { EmployeelisthelpComponent } from './employeelisthelp/employeelisthelp/employeelisthelp.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  EmployeeDetails: Observable<EMPLOYEE[]>;
  selected: EMPLOYEE;
  SearchEmployee;

  constructor(public service : EmployeeService,
    public toastr : ToastrService,
    public router: Router,
    private currentRoute: ActivatedRoute,
    public agentService: AgentService,
    public dialog: MatDialog,) { }

  ngOnInit() {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.refreshList()
    }
  }

  populateForm(at : EMPLOYEE){
    this.service.formData = Object.assign({},at);
  }

  onDelete(id : number){
    if(confirm('Are you sure you want to delete this record?')){
    this.service.deleteEmployee(id).subscribe(res =>{
      this.service.getData();
      this.toastr.warning('Deleted Successfully.','Employee');
      this.refreshList()
    })
  }
  }

  refreshList(){
    this.EmployeeDetails = this.agentService.getEmployees()
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmployeelisthelpComponent, dialogConfig);
  }
}
