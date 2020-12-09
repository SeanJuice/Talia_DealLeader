import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Agent } from './agent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenttypeService {

  constructor(public http:HttpClient) { }

  getAgenttypeList(){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL+'/api/AgentType', { headers: reqHeader }).toPromise();
  }

  update(formData : Agent) : Observable<Agent>{
    return this.http.put<Agent>('https://localhost:44377/api/updateAgentDetails/'+ formData.AGENT_ID, formData);
  }
}
