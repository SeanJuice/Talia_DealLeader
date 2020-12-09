import { Component, OnInit } from '@angular/core';
import { LeadService } from '../shared/lead.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Leaddetails } from '../shared/leaddeatils/leaddetails.model';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Quote } from '../shared/quote/quote.model';
import { ToastrService } from 'ngx-toastr';
import { formatCurrency } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuotehelpComponent } from './quotehelp/quotehelp/quotehelp.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  filetoUpload : File = null;
  imageUrl : string = "/assets/default.png";
  leadDetails: Observable<Leaddetails[]>;
  RFQDetails: Observable<Leaddetails[]>;
  SelectedRFQDetails: Observable<Leaddetails[]>;
  leadList;
  clicked = false;



  constructor(public service : LeadService,
    public router : Router,
    private currentRoute : ActivatedRoute,
    public toastr : ToastrService,
    public dialog: MatDialog,) {}

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{ 
      this.leadDetails = this.service.getLeadDetailsList(parseInt(localStorage.getItem("LEAD_ID")));
      this.RFQDetails = this.service.getSentRequestForQuoteList(parseInt(localStorage.getItem("LEAD_ID")));
    }
  }

  submitQuote(RFQ , SUP_ID, PROD_ID, AMOUNT, LEAD_ID){
    this.service.QuoteCaptured(LEAD_ID);
    this.service.postQuoteDetails(RFQ, SUP_ID, PROD_ID, AMOUNT, LEAD_ID);
    console.log(PROD_ID, RFQ, SUP_ID,  AMOUNT,  )
    this.toastr.success('Quote Submitted Successfully.', 'DealLeader.');
    this.router.navigate(['/lead/edit/'+ LEAD_ID]);

  }

  SelectRFQ(REQUEST_FOR_QUOTE_ID ){
    this.SelectedRFQDetails = this.service.getSelectedRFQDetails(REQUEST_FOR_QUOTE_ID);
  }

  ReturnToLeadDetails(LEAD_ID: number){
    this.router.navigate(['/lead/edit/'+ LEAD_ID]);
  }



  handleFileInput(file : FileList){
    this.filetoUpload = file.item(0);
    console.log(this.filetoUpload);

    //show image preview 
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
  }

  // handleFileInput(e){
  //   if(e.target.files){
  //     for(let i=0; i<File.length; i++){
  //       var reader = new FileReader();
  //       reader.readAsDataURL(e.target.files[i]);
  //       reader.onload=(events: any)=>{
  //         this.imgUrls.push(events.target.result);
  //       }
  //     }
  //   }
  // }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(QuotehelpComponent, dialogConfig);
  }
}
