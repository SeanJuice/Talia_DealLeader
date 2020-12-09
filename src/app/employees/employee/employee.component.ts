import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee/employee.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EMPLOYEE } from 'src/app/shared/employee/employee.model';
import { EmployeeTypeService } from 'src/app/shared/employee-type/employee-type.service';
import { TitleService } from 'src/app/shared/title.service';
import { Title } from 'src/app/shared/title.model';
import { EMPLOYEE_TYPE } from 'src/app/shared/employee-type/employee-type';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeehelpComponent } from './employeehelp/employeehelp/employeehelp.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataArray: Observable<EMPLOYEE[]>;
  dataArray$;
  data$;
  errorMessage : string;
  showError: boolean;

  sampleform: FormGroup;  
  titleList: Title[];
  employeeTypeList: EMPLOYEE_TYPE[];
  USERNAME: string;
  PASSWORD: string;

  constructor(public service : EmployeeService,
    public serviceT : EmployeeTypeService,
    private toastr : ToastrService,
    public titleService : TitleService,
    public employeeTypeService : EmployeeTypeService,
    public router : Router,
    public dialog: MatDialog,) { }

  getTypeT() {
    return this.serviceT.refreshList();
  }
  getTitle() {
    return this.serviceT.refreshList();
  }

  ngOnInit() {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.dataArray$ = this.getTypeT();
      this.data$ = this.getTitle();
      this.resetForm();
      this.titleService.getTitleList().then(res => this.titleList = res as Title[]);
      this.employeeTypeService.getEmployeeTypeList().then(res => this.employeeTypeList = res as EMPLOYEE_TYPE[]);
    }
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      EMPLOYEE_ID: null,
      EMPLOYEE_TYPE_ID: null,
      TITLE_ID: null,
      EMPLOYEE_NAME: "",
      EMPLOYEE_SURNAME: "",
      EMPLOYEE_ID_NO: "",
      EMPLOYEE_PASSPORT_NO: "",
      EMPLOYEE_PHYSICAL_ADDRESS: "",
      EMPLOYEE_CONTACT_NO: "",
      EMPLOYEE_EMAIL_ADDRESS: "",
      USER_ID : null,
      USERNAME : '',
      PASSWORD : '',
      USER_ROLE_ID : null,
    };
  }

  onSubmit(form : NgForm, e){
    this.USERNAME = e.target.USERNAME.value;
    this.PASSWORD = e.target.PASSWORD.value;
    sessionStorage["USERNAME"] = this.USERNAME;
    sessionStorage["PASSWORD"] = this.PASSWORD;
  
   this.insertUser(form);
   this.toastr.success("Employee Registered Successfull");
   this.resetForm(form);
  }

  // insertUser(form: NgForm){
  //   this.USERNAME = sessionStorage["USERNAME"];
  //   this.PASSWORD = sessionStorage["PASSWORD"];
  //   console.log(form.value)
  //   this.service.saveUser(form.value).subscribe(res => {
  //   })
  // }

  insertUser(form : NgForm){
    if(confirm('Are you sure you want to add this record?')){
    this.service.saveUser(form.value).subscribe((res:any) => {
      if(res.Error){
        this.errorMessage = res.Error;
        this.toastr.error('This employee already exists', 'Employee');
        this.showError = true;
      }
      else{
        this.USERNAME = sessionStorage["USERNAME"];
        this.PASSWORD = sessionStorage["PASSWORD"];
        this.toastr.success('Inserted Successfully', 'Employee');
        this.resetForm(form);
        this.showError = false;
      }
    });
  }}

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmployeehelpComponent, dialogConfig);
  }

}
