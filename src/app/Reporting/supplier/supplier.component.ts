import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js'
import { ReportingService } from 'src/app/reporting.service';
import 'jspdf-autotable';

import jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { SupplierhelpComponent } from './supplierhelp/supplierhelp/supplierhelp.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierReportComponent implements OnInit {
  title = 'Supplier Report';
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
    pdf.save('Supplier.pdf'); // Generated PDF
    });
  }
  GenerateReport(){
  
     
      this.reporting.getSupplierReportData().subscribe((response)=>{console.log(response);
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
    this.dialog.open(SupplierhelpComponent, dialogConfig);
  }

}
