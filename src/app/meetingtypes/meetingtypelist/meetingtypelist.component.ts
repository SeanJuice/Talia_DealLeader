import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeetingtypeService } from 'src/app/shared/meetingtype/meetingtype.service';
import { Meetingtype } from 'src/app/shared/meetingtype/meetingtype';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MeetingtypelisthelpComponent } from './meetingtypelisthelp/meetingtypelisthelp/meetingtypelisthelp.component';


@Component({
  selector: 'app-meetingtypelist',
  templateUrl: './meetingtypelist.component.html',
  styleUrls: ['./meetingtypelist.component.scss']
})
export class MeetingtypelistComponent implements OnInit {
  SearchMeetingType;
  data: Meetingtype[] = [];
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
      this.service.getMeetingtype().subscribe((res: Meetingtype[]) => {
        this.data = res;
      } );
    }
  }

populateForm(at : Meetingtype){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.deleteMeetingtype(id).subscribe((res : any) =>{
    if (res.Error){
      this.service.getMeetingtype().subscribe((res: Meetingtype[]) => {
        this.data = res;
      } );
      this.errorMessage = res.Error;
      this.toastr.error('Cannot be deleted becuase it is being used', 'Meeting Type');
      this.showError = true;
    }
    else{
      this.service.getMeetingtype().subscribe((res: Meetingtype[]) => {
        this.data = res;
      } );
      this.toastr.warning('Deleted Successfully', 'Meeting Type');
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
  this.dialog.open(MeetingtypelisthelpComponent, dialogConfig);
}

}

