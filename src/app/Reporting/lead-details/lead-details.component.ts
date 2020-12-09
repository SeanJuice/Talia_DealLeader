import { Component, OnInit } from '@angular/core';
import { ReportingService } from 'src/app/reporting.service';

import { Leadstatus } from "src/app/shared/leadstatus.model";


import 'jspdf-autotable';

import jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeaddetailsHelpComponent } from 'src/app/leads/lead-details/leaddetails-help/leaddetails-help/leaddetails-help.component';
declare var jsPDF: any;

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailComponent implements OnInit {
  title = 'Lead Details Report';
  TableData:Object;
  showErrorMessage:boolean=false;
  totalCount:any;
  selectedOption:any;
  leadStatusDetails: Observable<Leadstatus[]>;
  imageUrl : string = "/assets/4.JPG";


  constructor(private reporting: ReportingService,
    public router : Router,
    public dialog: MatDialog,) { }
  DownloadPDF(){
  
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
     
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('LeadDetails.pdf'); // Generated PDF
    });
  }
    GenerateReport(LEAD_STATUS_ID){
    
    if(this.selectedOption==undefined)
    {
      this.showErrorMessage=true;
    }
    else{
    
      this.showErrorMessage=false;
      console.log(LEAD_STATUS_ID)
      this.reporting.getLeadReportData(LEAD_STATUS_ID).subscribe((response)=>{console.log(response);
      this.TableData=response['TableData']; 
      
    
    
      let total=response['TableData'].map((c)=>c.Count)
      const t=total.reduce((a,b)=>a+b,0);
      this.totalCount=t ||0;
      console.log(this.totalCount);
    });      
  }
}

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
        this.leadStatusDetails = this.reporting.getLeadStatusDeatilsList();
      }
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(LeaddetailsHelpComponent, dialogConfig);
  }
 

}

