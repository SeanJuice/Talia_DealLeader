import { Component, OnInit } from '@angular/core';
import { CommissionService } from 'src/app/shared/commission/commission.service';
import { Commission } from 'src/app/shared/commission/commission.model';
import { ToastrService } from 'ngx-toastr';
//Download excel
import { ExcelService } from 'src/app/shared/Tina/excel.service';
import { HttpClient } from '@angular/common/http';
//chart
import {Chart} from 'chart.js';
import { Observable } from 'rxjs';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommissionlisthelpComponent } from './commissionlisthelp/commissionlisthelp/commissionlisthelp.component';
 ;

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.css']
})
export class CommissionListComponent implements OnInit {
  session: any;
  SearchCommission

 //Download excel
 title = 'excel-upload-download';
 excel =[];

 //chart
 data: Commission[];
 dataArray: Observable<Commission[]>;
 url = 'https://localhost:44377/api/Commission';
 COMMISSION_PERCENTAGE = [];
 COMMISSION_DATE = [];
 barchart = [];

 constructor(public service : CommissionService,
   private toastr : ToastrService,
   private excelService:ExcelService,
   private http: HttpClient,
   public router : Router,
   public dialog: MatDialog,) {
     //Download excel
     this.getJSON().subscribe(data => {
       data.forEach(row => {
         this.excel.push(row);
       });
      });
   }
     //Download excel
   exportAsXLSX():void {
      this.excelService.exportAsExcelFile(this.excel, 'sample');
   }
   public getJSON(): Observable<any> {
     return this.http.get('https://localhost:44377/api/Commission');
   }


 ngOnInit() {
  if (!localStorage.getItem("accessToken")){
    this.router.navigate([""]);
  }
  else{
    this.service.refreshList();

    //chart
    this.http.get(this.url).subscribe((result: Commission[]) => {
      result.forEach(x => {
        this.COMMISSION_DATE.push(x.COMMISSION_DATE);
        this.COMMISSION_PERCENTAGE.push(x.COMMISSION_PERCENTAGE);
      });
      this.barchart.push(new Chart('canvas1',

      {
        type: 'bar',
        data: {
          labels: this.COMMISSION_DATE,
          datasets: [
            {
              data: this.COMMISSION_PERCENTAGE,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#3cb371",  "#0000FF",  "#9966FF",  "#4C4CFF",  "#00FFFF",

              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks:{
                min:0,
                stepSize: 1
              }
            }],
          }
        }
      }))

    });

  this.loadCommission();
  }
  }

 loadCommission(){
   this.dataArray = this.getJSON();
   this.service.refreshList();
 }

 //Download pdf
 public captureScreen()
 {
   var data = document.getElementById('contentToConvert');
   html2canvas(data).then(canvas => {
     // Few necessary setting options
     var imgWidth = 208;
     var pageHeight = 350;
     var imgHeight = canvas.height * imgWidth / canvas.width;
     var heightLeft = imgHeight;

     const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
     var position = 0;
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     pdf.save('MYPdf.pdf'); // Generated PDF
   });
 }


 //populate table
 populateForm(at : Commission){
   this.service.formData = Object.assign({},at);
 }

 onDelete(id : number){
   if(confirm('Are you sure you want to delete this record?')){
   this.service.delete(id).subscribe(res =>{
     this.service.refreshList();
     window.location.reload();
     this.toastr.warning('Deleted Successfully.','Commission');
   })
 }
 }


 openInfo(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  this.dialog.open(CommissionlisthelpComponent, dialogConfig);
}
}
