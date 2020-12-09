import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommissionService } from 'src/app/shared/commission/commission.service';
import { CommissionHelpComponent } from '../../commission-help/commission-help/commission-help.component';
import { CommissionupdatehelpComponent } from '../commissionupdatehelp/commissionupdatehelp/commissionupdatehelp.component';

@Component({
  selector: 'app-commissionupdate',
  templateUrl: './commissionupdate.component.html',
  styleUrls: ['./commissionupdate.component.css']
})
export class CommissionupdateComponent implements OnInit {
  updateCommissionForm: FormGroup;
  id: any;

  constructor(public service : CommissionService,
    private toastr : ToastrService,
    public router : Router,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder,
    public dialog: MatDialog,) { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
    }

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
          COMMISSION_ID: null,
          COMMISSION_PERCENTAGE: null,
          COMMISSION_DATE: new Date(),
        };
      }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
      

       
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.update(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Commission');
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
      this.dialog.open(CommissionupdatehelpComponent, dialogConfig);
    }
  }
