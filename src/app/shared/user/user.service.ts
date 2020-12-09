import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData : User;

  constructor(public http: HttpClient) { }


  saveUser(formData : User){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL+ '/api/Agent',formData, { headers: reqHeader });
  }

  saveLogin(formData : User){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL+ 'api/Login', formData);
  }

  putAgent(formData: User){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.put('https://localhost:44377/api/updateAgentDetails'+formData.AGENT_ID,formData, { headers: reqHeader });
  }
  
}
