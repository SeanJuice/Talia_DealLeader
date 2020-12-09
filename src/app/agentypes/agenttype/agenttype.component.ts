import { Component, OnInit } from '@angular/core';
import { AgenttypeService } from 'src/app/shared/agenttype/agenttype.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgenttypehelpComponent } from './agenttypehelp/agenttypehelp/agenttypehelp.component';

@Component({
  selector: 'app-agenttype',
  templateUrl:'./agenttype.component.html',
  styleUrls: ['./agenttype.component.css']
})
export class AgenttypeComponent implements OnInit {
  errorMessage : string;
  showError: boolean;

  constructor(public service : AgenttypeService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.resetForm();
    }
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      AGENT_TYPE_ID: null,
      AGENT_TYPE_NAME: '',
    };
  }

  onSubmit(form : NgForm){
    if(form.value.AGENT_TYPE_ID ==null)
      this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
      this.service.postAgenttype(form.value).subscribe((res: any) => {
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This agent type already exists', 'Agent Type');
          this.showError = true;
        }
        else{
          this.toastr.success('Added Successfully.','Agent Type');
          this.resetForm(form);
          this.service.refreshList();
          this.showError = false;
        }
      });
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AgenttypehelpComponent, dialogConfig);
  }
}
