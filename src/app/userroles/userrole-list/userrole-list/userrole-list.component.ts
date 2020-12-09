import { Component, OnInit } from '@angular/core';
import { UserroleService } from 'src/app/shared/userrole/userrole.service';
import { Userrole } from 'src/app/shared/userrole/userrole.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserroleHelpComponent } from '../../userrole-help/userrole-help/userrole-help.component';

@Component({
  selector: 'app-userrole-list',
  templateUrl: './userrole-list.component.html',
  styleUrls: ['./userrole-list.component.css']
})
export class UserroleListComponent implements OnInit {
  SearchUserRole;
  errorMessage : string;
  showError: boolean;

  allEmployeeType: Observable<Userrole[]>;

  constructor(public service : UserroleService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.service.refreshList();
    }
  }

  populateForm(ur : Userrole){
    this.service.formData = Object.assign({},ur);
  }

  onDelete(id : number){
    if(confirm('Are you sure you want to delete this record? ')){
    this.service.deleteUserRole(id).subscribe((res : any) =>{
      if (res.Error){
        this.errorMessage = res.Error;
        this.toastr.error('Cannot be deleted becuase it is being used', 'User Role');
        this.showError = true;
        this.service.refreshList();
      }
      else{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully', 'User Role');
        this.showError = false;
      }
    })
  }
  }



 openInfo(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  this.dialog.open(UserroleHelpComponent, dialogConfig);
}
}
