import { Component, OnInit } from '@angular/core';
import { ReportingService } from 'src/app/reporting.service';
import { Observable } from 'rxjs';  
import {Agent} from 'src/app/shared/agent';
import {ActivatedRoute, Router} from '@angular/router';
import { Input,  Inject } from '@angular/core';
import 'jspdf-autotable';

import jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgentleadhistoryelpComponent } from './agentleadhistoryelp/agentleadhistoryelp/agentleadhistoryelp.component';

@Component({
  selector: 'app-agent-lead-history',
  templateUrl: './agent-lead-history.component.html',
  styleUrls: ['./agent-lead-history.component.css']
})
export class AgentLeadHistoryComponent implements OnInit {
  title = 'Agent Lead History Report';
  TableData:Object;
  showErrorMessage:boolean=false;
  totalCount:any;
  agentSelection:any;
  SearchAgent;
  agents : Observable<Agent[]>;
  imageUrl : string = "/assets/4.JPG"; 
   
  

  constructor(private reporting: ReportingService, 
    public currentRoute:ActivatedRoute,
    public router : Router,
    public dialog: MatDialog,) {}
  
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
pdf.save('AgentLead.pdf'); // Generated PDF
});
  }
  GenerateReport(AGENT_ID : any){
    
    if(this.agentSelection=undefined)
    {
      this.showErrorMessage=true;
    }
    else{
      //this.agentSelection=agAGENT_ID;
      this.showErrorMessage=false;
      console.log(AGENT_ID)
      this.reporting.getAgentLeadReportData(AGENT_ID).subscribe((response)=>{console.log(response);
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
      this.agents = this.reporting.getAllAgents();
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(AgentleadhistoryelpComponent, dialogConfig);
  }


}
