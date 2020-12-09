import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConditionService } from 'src/app/shared/condition/condition.service';
import { ConditionshelpComponent } from './conditionshelp/conditionshelp/conditionshelp.component';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  updateCommissionForm: FormGroup;
  id: any;

  constructor(public service : ConditionService,
    private toastr : ToastrService,
    private actRoute: ActivatedRoute,
    public router : Router,
    public dialog: MatDialog,) { { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
    } }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
      }
    }

      resetForm(form? : NgForm){
        if(form != null)
        form.resetForm();
        this.service.formData = {
          CONDITION_ID : null,
          CONDITION_NAME :"",
        };
      }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
          
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.update(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Condition');
          this.resetForm(form);
          this.service.refreshList();
        })
      }
    }

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(ConditionshelpComponent, dialogConfig);
    }

}
