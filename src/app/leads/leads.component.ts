import { Component, OnInit } from '@angular/core';
import { LeadService } from '../shared/lead.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeadsHelpComponent } from './leads-help/leads-help/leads-help.component';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styles: [
  ]
})
export class LeadsComponent implements OnInit {
  leadList;
  SearchLeads;
  constructor(public service : LeadService,
    public router : Router,
    public toastr: ToastrService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.refreshList();
    }
  }

  refreshList(){
    this.service.getLeadList().then(res => this.leadList = res);
  }

  openOrEdit(LEAD_ID : number){
    this.router.navigate(['/lead/edit/'+ LEAD_ID]);
  }

  onLeadDelete(id : number){
    this.service.deleteLead(id).then(res =>{
      this.refreshList();
      this.toastr.warning("Lead Removed Successfully!", 'DealLeader')
    });
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(LeadsHelpComponent, dialogConfig);
  }

  myFunction(){
    // Declare variables 
    var input, filter, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
 
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td") ; 
      for(j=0 ; j<td.length ; j++)
      {
        let tdata = td[j] ;
        if (tdata) {
          if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break ; 
          } else {
            tr[i].style.display = "none";
          }
        } 
      }
    }
  }
}
