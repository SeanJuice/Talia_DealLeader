import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPLOYEE_TYPE } from 'src/app/shared/employee-type/employee-type';
import { EmployeeTypeService } from 'src/app/shared/employee-type/employee-type.service';
import { EmployeeService } from 'src/app/shared/employee/employee.service';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-maintainemployee',
  templateUrl: './maintainemployee.component.html',
  styleUrls: ['./maintainemployee.component.css']
})
export class MaintainemployeeComponent implements OnInit {
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


  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.titleService.getTitleList().then(res => this.titleList = res as Title[]);
      this.employeeTypeService.refreshList().subscribe(res => this.employeeTypeList = res as EMPLOYEE_TYPE[]);
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
      this.toastr.warning('Updated Successfully.','Employee');
      this.resetForm(form);
      this.service.getData();
    })
  }
}

}
