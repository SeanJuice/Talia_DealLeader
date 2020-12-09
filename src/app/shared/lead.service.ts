import { Injectable } from '@angular/core';
import { Lead } from './lead.model';
import { LeadItem } from "./lead-item.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Leaddetails } from './leaddeatils/leaddetails.model';
import { Quote } from '@angular/compiler';
import { Quotedetails } from './quotedetails.model';
import { Agentmeeting } from './agentmeeting';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  formData: Lead;
  dataForm : Leaddetails;

  data : Quote;
  leadItems: LeadItem[];
  

  constructor(public http: HttpClient) { }

  saveOrUpdateLead(){
    var body = {
      ...this.formData,
      LEAD_PRODUCT : this.leadItems,
    };
    return this.http.post(environment.loginURL+'/api/Lead', body);
  }

  getLeadList(){
    return this.http.get(environment.loginURL+'/api/Lead').toPromise();
  }

  getAgentLeadList(){
    return this.http.get('https://localhost:44377/api/GetAgentLeads?id=' + localStorage.getItem("AgentID")).toPromise();
  }

  getLeadById(id: number): any{
    return this.http.get(environment.loginURL+'/api/lead?='+ id).toPromise();
  }

  getLeadDetailsList(LEAD_ID) : Observable<Leaddetails[]>{
    return this.http.get<Leaddetails[]>('https://localhost:44377/api/getAgentLeadDetails?id=' + LEAD_ID);
  }

  getAgentLeadDetails(id : number): any {
    return this.http.get('https://localhost:44377/api/GetAgentLeadsDetails?id='+ id).toPromise();
  }

  deleteLead(id : number){
    return this.http.delete(environment.loginURL+'/api/Lead/'+ id).toPromise();
  }

  getRFQDetailsList(LEAD_ID) : Observable<Leaddetails[]>{
    return this.http.get<Leaddetails[]>('https://localhost:44377/api/RFQDetails?id=' + LEAD_ID);
  }

  postQuoteDetails(RFQ , SUP_ID, PROD_ID, AMOUNT, LEAD_ID){
    return this.http.post('https://localhost:44377/api/SubmitQuote?rfq=' + RFQ + "&sup=" + SUP_ID + "&prod=" + PROD_ID + "&amount=" + AMOUNT + "&lead=" + LEAD_ID, "").toPromise();
  }

  
  postMeetingDetails(start, end,  MEETING_TYPE_ID, MEETING_LOCATION, LEAD_ID, Date){
    return this.http.post('https://localhost:44377/api/SubmitMeeting?start=' + start + "&end=" + end + "&MEETING_TYPE_ID=" + MEETING_TYPE_ID + "&MEETING_LOCATION=" + MEETING_LOCATION + 
    "&LEAD_ID=" + LEAD_ID + "&Date=" + Date, "").toPromise();
  }


  postContract(LEAD_ID, PICTURE){
    return this.http.post('https://localhost:44377/api/SubmitContract?lead=' + LEAD_ID + "&pic=" + PICTURE, "").toPromise();
  }

  CancelLead(LEAD_ID : number){
     return this.http.get('https://localhost:44377/api/CancelLead?id=' + LEAD_ID).toPromise();
  }

  acceptQuote(LEAD_ID : number){
    return this.http.get('https://localhost:44377/api/acceptQuote?id=' + LEAD_ID).toPromise();
 }

 meetingBooked(LEAD_ID : number){
  return this.http.get('https://localhost:44377/api/MeetingBooked?id=' + LEAD_ID).toPromise();
}

 acceptMeeting(LEAD_ID : number){
  return this.http.get('https://localhost:44377/api/meetingAccepted?id=' + LEAD_ID).toPromise();
}

rescheduleMeeting(LEAD_ID : number){
  return this.http.get('https://localhost:44377/api/rescheduleMeeting?id=' + LEAD_ID).toPromise();
}

 getAgentMeeting(LEAD_ID) : Observable<Agentmeeting[]>{
  return this.http.get<Agentmeeting[]>('https://localhost:44377/api/getAgentMeetingDetails?id=' + LEAD_ID);
}

 QuoteAccepted(LEAD_ID){
  return this.http.get('https://localhost:44377/api/quoteAccepted?id=' + LEAD_ID).toPromise();
}

QuoteDeclined(LEAD_ID){
  return this.http.get('https://localhost:44377/api/quoteDeclined?id=' + LEAD_ID).toPromise();
}

 declineQuote(LEAD_ID : number){
  return this.http.get('https://localhost:44377/api/DeclineQuote?id=' + LEAD_ID).toPromise();
}

  getQuoteList(id) : Observable<Quotedetails[]>{
    return this.http.get<Quotedetails[]>('https://localhost:44377/api/getQuoteDetails?id=' + id);
  }

  getQuoteProductList(id) : Observable<Quotedetails[]>{
    return this.http.get<Quotedetails[]>('https://localhost:44377/api/getQuoteProductDetails?id=' + id);
  }

  getQuotePicture(QUOTE_ID : number){
    return this.http.get('https://localhost:44377/api/getQuotePicture?id=' + QUOTE_ID);
  }

  postRFQDetails( SUP_ID, LEAD_ID){
    return this.http.post('https://localhost:44377/api/SendRFQ?sup=' +  SUP_ID  + "&lead=" + LEAD_ID,"").toPromise();
  }

  getRFQList(PRODUCT_ID) : Observable<Leaddetails[]>{
    return this.http.get<Leaddetails[]>('https://localhost:44377/api/getRFQDetails?id=' + PRODUCT_ID);
  }

  getSentRequestForQuoteList(LEAD_ID) : Observable<Leaddetails[]>{
    return this.http.get<Leaddetails[]>('https://localhost:44377/api/getSentRFQDetails?id=' + LEAD_ID);
  }

  getSelectedRFQDetails(REQUEST_FOR_QUOTE_ID) : Observable<Leaddetails[]>{
    return this.http.get<Leaddetails[]>('https://localhost:44377/api/getSelectedRFQDetails?id=' + REQUEST_FOR_QUOTE_ID);
  }

  QuoteSubmitted(LEAD_ID : number){
    return this.http.get('https://localhost:44377/api/QuoteSubmitted?id=' + LEAD_ID).toPromise();
  }

  rfqSent(LEAD_ID ){
    return this.http.get('https://localhost:44377/api/rfqSent?id=' + LEAD_ID).toPromise();
 }

 QuoteCaptured(LEAD_ID ){
  return this.http.get('https://localhost:44377/api/submitQuote?id=' + LEAD_ID).toPromise();
}

leadFinalized(LEAD_ID ){
  return this.http.get('https://localhost:44377/api/FinalizeLead?id=' + LEAD_ID).toPromise();
}

  sendEmail(ProdName, Year, condition , quantity){
    return this.http.post("https://localhost:44377/api/PostSendGmail?ProdName=" +  ProdName  + "&Year=" + Year + "&condition=" + 
    condition + "&quantity=" +  quantity ,"" ).toPromise();
  }
}
