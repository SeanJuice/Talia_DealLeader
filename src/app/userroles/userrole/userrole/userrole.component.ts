import { Component, OnInit } from '@angular/core';
import { UserroleService } from 'src/app/shared/userrole/userrole.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddurhelpComponent } from '../addurhelp/addurhelp/addurhelp.component';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit {
  errorMessage : string;
  showError: boolean;

  constructor(public service : UserroleService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      USER_ROLE_ID: null,
      USER_ROLE_NAME: '',
    }
  }

  onSubmit(form : NgForm){
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.insertRecord(form);
    }
  }

  insertRecord(form : NgForm){
    if(confirm('Are you sure you want to add this record?')){
    this.service.postUserRole(form.value).subscribe((res:any) => {
      if(res.Error){
        this.errorMessage = res.Error;
        this.toastr.error('This user role already exists', 'User Role');
        this.showError = true;
      }
      else{
        this.toastr.success('Inserted Successfully', 'User Role');
        this.resetForm(form);
        this.service.refreshList();
        this.showError = false;
      }
    });
  }}

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddurhelpComponent, dialogConfig);
  }

}
