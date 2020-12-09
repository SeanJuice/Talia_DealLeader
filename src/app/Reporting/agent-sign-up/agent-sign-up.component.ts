import { Component, OnInit } from '@angular/core';

import { ReportingService } from 'src/app/reporting.service';

import 'jspdf-autotable';
import jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgentsignuphelpComponent } from './agentsignuphelp/agentsignuphelp/agentsignuphelp.component';

@Component({
  selector: 'app-agent-sign-up',
  templateUrl: './agent-sign-up.component.html',
  styleUrls: ['./agent-sign-up.component.css']
})
export class AgentSignUpComponent implements OnInit {
  title = 'Agents Report';
  TableData:Object;
  showErrorMessage:boolean=false;
  totalCount:any;
  selectedOption:any;
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
    pdf.save('AgentSignUp.pdf'); // Generated PDF
    });
  }
  GenerateReport(){
    
   
    
      this.showErrorMessage=false;
      this.reporting.getAgentReportData().subscribe((response)=>{console.log(response);
      this.TableData=response['TableData']; 
      
    
    
      let total=response['TableData'].map((c)=>c.Count)
      const t=total.reduce((a,b)=>a+b,0);
      this.totalCount=t ||0;
      console.log(this.totalCount);
     
  
      

          });    
      
    
  }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AgentsignuphelpComponent, dialogConfig);
  }


}
