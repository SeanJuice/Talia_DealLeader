import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MeetingtypeService } from 'src/app/shared/meetingtype/meetingtype.service';
import { Meetingtype } from 'src/app/shared/meetingtype/meetingtype';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MeetingtypehelpComponent } from './meetingtypehelp/meetingtypehelp/meetingtypehelp.component';

@Component({
  selector: 'app-meetingtype',
  templateUrl: './meetingtype.component.html',
  styleUrls: ['./meetingtype.component.scss']
})
export class MeetingtypeComponent implements OnInit {

  errorMessage : string;
  showError: boolean;

  constructor(public service : MeetingtypeService,
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
      MEETING_TYPE_ID: null,
      MEETING_TYPE_NAME:''
      };
    }
    
    onSubmit(form : NgForm){
      this.insertRecord(form);
    }
  
    insertRecord(form: NgForm){
      form.value.MEETING_TYPE_ID = this.service.getLastId;
      console.log(form.value);
      if(confirm('Are you sure you want to add this record?')){
      this.service.postMeetingtype(form.value).subscribe((res: any) => {
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This meeting type already exists', 'Meeting Type');
          this.showError = true;
        }
        else{
          this.toastr.success('Added Successfully.','Meeting Type');
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
      this.dialog.open(MeetingtypehelpComponent, dialogConfig);
    }
}
