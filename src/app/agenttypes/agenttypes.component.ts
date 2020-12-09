import { Component, OnInit } from '@angular/core';
import { AgenttypeService } from 'src/app/shared/agenttype/agenttype.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgenttypeshelpComponent } from './agenttypeshelp/agenttypeshelp/agenttypeshelp.component';

@Component({
  selector: 'app-agenttypes',
  templateUrl: './agenttypes.component.html',
  styleUrls: ['./agenttypes.component.css']
})
export class AgenttypesComponent implements OnInit {
  id: any;

  constructor(public service : AgenttypeService,
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
          AGENT_TYPE_ID: null,
          AGENT_TYPE_NAME: '',
        };
      }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
          
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.putAgenttype(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Agent Type');
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
      this.dialog.open(AgenttypeshelpComponent, dialogConfig);
    }

}
