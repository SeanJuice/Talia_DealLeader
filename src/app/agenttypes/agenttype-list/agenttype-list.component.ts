import { Component, OnInit } from '@angular/core';
import { AgenttypeService } from 'src/app/shared/agenttype/agenttype.service';
import { Agenttype } from 'src/app/shared/agenttype.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgenttypelisthelpComponent } from './agenttypelisthelp/agenttypelisthelp/agenttypelisthelp.component';


@Component({
  selector: 'app-agenttype-list',
  templateUrl: './agenttype-list.component.html',
  styleUrls: ['./agenttype-list.component.css']
})
export class AgenttypeListComponent implements OnInit {
  data: Agenttype[] = [];
  SearchAgentType;
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
      this.service.getAgent().subscribe((res: Agenttype[]) => {
        this.data = res;
      } );
    }
  }

populateForm(at : Agenttype){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.deleteAgenttype(id).subscribe((res : any) =>{
    if (res.Error){
      this.service.getAgent().subscribe((res: Agenttype[]) => {
        this.data = res;
      } );
      this.errorMessage = res.Error;
      this.toastr.error('Cannot be deleted becuase it is being used', 'Agent Type');
      this.showError = true;
    }
    else{
      this.service.getAgent().subscribe((res: Agenttype[]) => {
        this.data = res;
      } );
      this.toastr.warning('Deleted Successfully', 'Agent Type');
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
  this.dialog.open(AgenttypelisthelpComponent, dialogConfig);
}

}
