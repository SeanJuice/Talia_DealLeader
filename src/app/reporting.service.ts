import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';  
import { Agent } from 'src/app/shared/agent';
import { Leadstatus } from './shared/leadstatus.model';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  list : Agent[];

  constructor(private http :HttpClient) { }
  getLeadReportData(LEAD_STATUS_ID :number)
  {
    return this.http.get("https://localhost:44377/api/Report/getLeadReportData?statusSelection="+ LEAD_STATUS_ID);
  }
  getAgentLeadReportData(AGENT_ID)
  {
    console.log("https://localhost:44377/api/Report/getAgentLeadReportData?agentSelection="+ AGENT_ID);
    return this.http.get("https://localhost:44377/api/Report/getAgentLeadReportData?agentSelection="+ AGENT_ID);
  }
  getProductReportData(startdate:Date, enddate:Date)
  {
    return this.http.get("https://localhost:44377/api/Report/getProductReportData?startdate="+startdate+"&enddate="+enddate).pipe(map(result=>result))
  }
  getAllAgents(): Observable<Agent[]> {  
    return this.http.get<Agent[]>("https://localhost:44377/api/getAgentDetailsAll");
  } 
  getAgentById(agentid: any): Observable<Agent> {    
    return this.http.get<Agent>("https://localhost:44377/api/getAgentById?id=" +agentid);    
  } 
   getAgentReportData()
  {
    return this.http.get("https://localhost:44377/api/Report/getAgentReportData").pipe(map(result=>result))
  }
  getProductsReportData()
  {
    return this.http.get("https://localhost:44377/api/Report/getProductsReportData").pipe(map(result=>result))
  }
  getSupplierReportData()
  {
    return this.http.get("https://localhost:44377/api/Report/getSupplierReportData").pipe(map(result=>result))
  }

  getLeadStatusDeatilsList() : Observable<Leadstatus[]> {
    return this.http.get<Leadstatus[]>("https://localhost:44377/api/getLeadStatuses");
  }
  

}
