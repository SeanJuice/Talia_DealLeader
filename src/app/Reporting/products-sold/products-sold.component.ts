import { Component, OnInit } from '@angular/core';
import { ReportingService } from 'src/app/reporting.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import * as html2pdf from 'html2pdf.js'
import {Chart} from 'chart.js';
import 'jspdf-autotable';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductssoldhelpComponent } from './productssoldhelp/productssoldhelp/productssoldhelp.component';



@Component({
  selector: 'app-products-sold',
  templateUrl: './products-sold.component.html',
  styleUrls: ['./products-sold.component.css']
})
export class ProductsSoldComponent implements OnInit {
  title = 'Products Sold Report';
  TableData:Object;
  showErrorMessage:boolean=false;
  showErrorMessage1:boolean=false;
  showErrorMessage2:boolean=false;
  totalSum:any;
  startdate:any;
  enddate:any;
 // chart = Chart;
  chart = [];
 currentDate=moment().format('YYYY-MM-DD');
  imageUrl : string = "/assets/4.JPG";


  constructor(private reporting: ReportingService,
    public router : Router,
    public dialog: MatDialog,) {
}

  DownloadPDF(){

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
pdf.save('ProductsSold.pdf'); // Generated PDF
});
  }
  GenerateReport(){
    /*if(this.chart !=null) {
    this.chart.clear();
    }*/
    if((this.startdate==undefined)||(this.enddate==undefined) || (this.startdate==undefined&&this.enddate==undefined))
    {
      this.showErrorMessage=true;
    }
    else if(this.startdate>this.startdate)
    {
      this.showErrorMessage1=true;
    }
    else if(this.enddate>this.currentDate)
    {
      this.showErrorMessage2=true;
    }
    else{

      this.showErrorMessage=false;
      this.reporting.getProductReportData(this.startdate,this.enddate).subscribe((response)=>{console.log(response);
      this.TableData=response['TableData'];
      let keys=response['ChartData'].map((aa)=>(aa).PRODUCT_NAME);
      let values=response['ChartData'].map((aa)=>(aa).Sum);


      let total=response['TableData'].map((c)=>c.Sum)
      const t=total.reduce((a,b)=>a+b,0);
      this.totalSum=t ||0;
      console.log(this.totalSum);




      this.chart.push(  new Chart('canvas',{
        type: 'bar',
        data: {
          labels: keys,
          datasets: [
            {
              label: 'Total products / Product Name',
              data: values,
              borderColor: '#3cba9f',
              fill:false,
              barPercentage: 0.45,
              backgroundColor: [
                "#3cb371",
                  "#0000FF",
                  "#9966FF",
                  "#4C4CFF",
                  "#186A3B",
                  "#6E2C00",
                  "#F1C40F",
                  "#E74C3C",
                  "#2ECC71",
                  "#7D3C98",

              ]

            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title:{
            display:true,
            text:"Total products sold by Product name"
          },
          scales: {
            xAxes: [{
              display: true,

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
  }
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
    this.dialog.open(ProductssoldhelpComponent, dialogConfig);
  }


}
