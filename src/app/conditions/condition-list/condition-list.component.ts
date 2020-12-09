import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/shared/condition/condition.service';
import { Condition } from 'src/app/shared/condition/condition.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConditionlisthelpComponent } from './conditionlisthelp/conditionlisthelp/conditionlisthelp.component';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.css']
})
export class ConditionListComponent implements OnInit {
  SearchCondition;
  errorMessage : string;
  showError: boolean;

  data: Condition[] = [];
  constructor(public service : ConditionService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.service.refreshList().subscribe((res: Condition[]) => {
        this.data = res;
      } );
    }
  }

populateForm(at : Condition){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.delete(id).subscribe((res : any) =>{
    if (res.Error){
      this.service.refreshList().subscribe((res: Condition[]) => {
        this.data = res;
      } );
      this.errorMessage = res.Error;
      this.toastr.error('Cannot be deleted becuase it is being used', 'Condition');
      this.showError = true;
    }
    else{
      this.service.refreshList().subscribe((res: Condition[]) => {
        this.data = res;
      } );
      this.toastr.warning('Deleted Successfully', 'Condition');
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
  this.dialog.open(ConditionlisthelpComponent, dialogConfig);
}

}
