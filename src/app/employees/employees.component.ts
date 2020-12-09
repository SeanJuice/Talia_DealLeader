import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPLOYEE_TYPE } from '../shared/employee-type/employee-type';
import { EmployeeTypeService } from '../shared/employee-type/employee-type.service';
import { EmployeeService } from '../shared/employee/employee.service';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  id: any;
  titleList: Title[];
  employeeTypeList: EMPLOYEE_TYPE[];

  constructor(public service : EmployeeService,
    private toastr : ToastrService,
    private actRoute: ActivatedRoute,
    public router : Router,
    public titleService : TitleService,
    public employeeTypeService : EmployeeTypeService,) { { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
    } }

    getTypeT() {
      return this.titleService.getTitleList();
    }
    getTitle() {
      return this.employeeTypeService.refreshList();
    }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.titleService.getTitleList().then(res => this.titleList = res as Title[]);
      this.employeeTypeService.getEmployeeTypeList().then(res => this.employeeTypeList = res as EMPLOYEE_TYPE[]);
    }
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.data = {
      EMPLOYEE_ID: null,
      EMPLOYEE_TYPE_ID: null,
      TITLE_ID: null,
      EMPLOYEE_NAME: '',
      EMPLOYEE_SURNAME: '',
      EMPLOYEE_ID_NO: '',
      EMPLOYEE_PASSPORT_NO: '',
      EMPLOYEE_PHYSICAL_ADDRESS: '',
      EMPLOYEE_CONTACT_NO: '',
      EMPLOYEE_EMAIL_ADDRESS: '',
    };
  }
  
  onSubmit(form : NgForm){
    this.updateRecord(form);
  }
      
  updateRecord(form: NgForm){
    if(confirm('Are you sure you want to update this record?')){
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully.','Country');
      this.resetForm(form);
      this.service.getData();
    })
  }
}

}
