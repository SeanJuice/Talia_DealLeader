import { Injectable } from '@angular/core';
import { Agenttype } from './agenttype.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenttypeService {

  formData : Agenttype;
  list : Agenttype[];
  rootURL = 'https://localhost:44377'

  constructor(public http : HttpClient) { }

  postAgenttype(formData: Agenttype){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootURL +'/api/AgentType',formData, { headers: reqHeader });
  }

  refreshList(){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    this.http.get(this.rootURL +'/api/AgentType', { headers: reqHeader })
    .toPromise().then(res => this.list = res as Agenttype[]);
  }

  getAgent(): Observable<Agenttype[]>{
    return this.http.get<Agenttype[]>(this.rootURL +'/api/AgentType')
  }

  putAgenttype(formData: Agenttype): Observable<Agenttype>{
    return this.http.put<Agenttype>(this.rootURL +'/api/AgentType/update/'+formData.AGENT_TYPE_ID,formData);
  }

  deleteAgenttype(id : number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.delete(this.rootURL +'/api/AgentType/'+id, { headers: reqHeader });
  }
}
