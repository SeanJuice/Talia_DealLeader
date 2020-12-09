import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MeetingtypeService } from 'src/app/shared/meetingtype/meetingtype.service';
import { MeetingtypeshelpComponent } from './meetingtype/meetingtypeshelp/meetingtypeshelp/meetingtypeshelp.component';

@Component({
  selector: 'app-meetingtypes',
  templateUrl: './meetingtypes.component.html',
  styleUrls: ['./meetingtypes.component.css']
})
export class MeetingtypesComponent implements OnInit {

  id: any;

  constructor(public service : MeetingtypeService,
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
          MEETING_TYPE_ID: null,
          MEETING_TYPE_NAME:''
        };
      }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
          
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.putMeetingtype(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Meeting Type');
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
      this.dialog.open(MeetingtypeshelpComponent, dialogConfig);
    }

}
