import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentstatusService {

  constructor(public http: HttpClient) { }

  getAgentstatusList(){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL+'/api/Agentstatus', { headers: reqHeader }).toPromise();
  }
}
