import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LeadService } from 'src/app/shared/lead.service';
import { Quotedetails } from 'src/app/shared/quotedetails.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewquoteHelpComponent } from './viewquote-help/viewquote-help/viewquote-help.component';

@Component({
  selector: 'app-viewquote',
  templateUrl: './viewquote.component.html',
  styleUrls: ['./viewquote.component.css']
})
export class ViewquoteComponent implements OnInit {
  quoteDetails: Observable<Quotedetails[]>;
  quoteProductDetails : Observable<Quotedetails[]>;
  agentLeadList;

  constructor(public router : Router,
    public service : LeadService,
    private currentRoute : ActivatedRoute,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{ 
      let id = this.currentRoute.snapshot.paramMap.get('id');
      console.log(id)
      this.quoteProductDetails = this.service.getQuoteProductList(parseInt(id));
      this.quoteDetails = this.service.getQuoteList(parseInt(id));
    }
  }

  acceptQuote(LEAD_ID){
    console.log(LEAD_ID)
    this.service.acceptQuote(LEAD_ID);
    this.service.QuoteAccepted(LEAD_ID);
    window.location.reload();
  }

  declineQuote(LEAD_ID){
    console.log(LEAD_ID)
    this.service.declineQuote(LEAD_ID);
    this.service.QuoteDeclined(LEAD_ID);
    window.location.reload();
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(ViewquoteHelpComponent, dialogConfig);
  }

}
