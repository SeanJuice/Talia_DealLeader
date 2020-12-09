import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserroleService } from 'src/app/shared/userrole/userrole.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Userrole } from 'src/app/shared/userrole/userrole.model';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserroleshelpComponent } from './userroleshelp/userroleshelp/userroleshelp.component';

@Component({
  selector: 'app-userroles',
  templateUrl: './userroles.component.html',
  styleUrls: ['./userroles.component.css']
})
export class UserrolesComponent implements OnInit {


  userRoles: Observable<Userrole[]>;

  constructor(public service : UserroleService,
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
  getAllUserRoles(){
    this.service.refreshList();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      USER_ROLE_ID: null,
      USER_ROLE_NAME: ""
    };
  }

  onSubmit(form : NgForm){
    this.updateRecord(form);
  }
  
  updateRecord(form: NgForm){
    if(confirm('Are you sure you want to update this record?')){
      this.service.putUserRole(form.value).subscribe(res => {
        this.toastr.info('Updated Successfully.','User Role');
        this.resetForm(form);
        this.service.refreshList();
      })
  }}
  
  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(UserroleshelpComponent, dialogConfig);
  }
}
