import { Injectable } from '@angular/core';
import { Agent } from './agent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EMPLOYEE } from './employee/employee.model';
import { User } from './user/user.model';
import { Reset } from './loginuser/reset/reset.model';


@Injectable({
  providedIn: 'root'
})
export class AgentService {
  formData: Agent;

  constructor(public http:HttpClient) { }

getAgentDetailsList(id) : Observable<Agent[]>{
    return this.http.get<Agent[]>('https://localhost:44377/api/getAgentDetails?id=' + id);
  }

getUserDetails(id) : Observable<Reset[]>{
    return this.http.get<Reset[]>('https://localhost:44377/api/getUserDetails?id=' + id);
  }

acceptAgentRFR(AGENT_ID : number){
    return this.http.get('https://localhost:44377/api/acceptRFR?id=' + AGENT_ID).toPromise();
 }

updateUR(USER_ID){
  return this.http.get('https://localhost:44377/api/UpdateUR?id=' + USER_ID ).toPromise();
} 

declineAgentRFR(AGENT_ID : number){
  return this.http.get('https://localhost:44377/api/declineRFR?id=' + AGENT_ID).toPromise();
} 

getAgentList() : Observable<Agent[]>{
  return this.http.get<Agent[]>('https://localhost:44377/api/getAgentDetails?id=' + localStorage.getItem("AgentID"));
}

getAcceptDecline(id) : Observable<Agent[]>{
  return this.http.get<Agent[]>('https://localhost:44377/api/getAgentDetails?id=' + id);
}


getEmployeeList() : Observable<EMPLOYEE[]>{
  return this.http.get<EMPLOYEE[]>('https://localhost:44377/api/getEmployeeDetails?id=' + localStorage.getItem("EmployeeID"));
}

getEmployees() : Observable<EMPLOYEE[]>{
  return this.http.get<EMPLOYEE[]>('https://localhost:44377/api/getEmployees');
}

updateAgent(id){
  return this.http.put(environment.loginURL + '/api/updateAgentDetails', id);
}

updatePasswrod(id,formData : Reset): Observable<Reset>{
  return this.http.put<Reset>('https://localhost:44377/api/updatePasswordDetails/' + id, formData);
}

//get all needs to be added

getData(): Observable<Agent[]> {
  return this.http.get<Agent[]>("https://localhost:44377/api/AGENTs/GetAGENT");
}

//Update agent status

putAgent(formData: Agent): Observable<Agent> {
  return this.http.put<Agent>(environment.loginURL + '/AGENTs/PutAgent/', formData);
}

//View agent !! might need to remove

// getbyId(id) : any {
//   return this.http.get('https://localhost:44377/api/Report/getAgentById/' +id);
// } 
getbyId(agentid: any): Observable<Agent> {    
  return this.http.get<Agent>("https://localhost:44377/api/getAgentById/" +agentid);    
} 
//Sms on status

postSms(){ 
  return this.http.post('https://localhost:44377/api/AGENTs/SendMessage', "");
}

checkEmail(formData : Agent ){ 
  return this.http.post('https://localhost:44377/api/ForgottenPassword', formData);
}

postEmail(id : number){ 
  console.log('https://localhost:44377/api/PostPasswordGmail/'+ id, "")
  return this.http.post('https://localhost:44377/api/PostPasswordGmail/' + id, "").toPromise();
}

uploadFile(file){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json",
      'Access-Control-Allow_Origin': "*"
    })
  }
  return this.http.post<any>('https://localhost:44377/api/Agent', {file: file}, httpOptions );
}

// public upload(formdata){
//   return this.http.post<any>('https://localhost:44377/api/Agent', formdata)
// }

// upload(file): Observable<any>{
//   const formData = new FormData();
//   formData.append("file", file, file.name);
//   return this.http.post('https://localhost:44377/api/Agent', formData)
// }

public upload(formData){
  return this.http.post<any>('https://localhost:44377/api/Agent', formData, {
    reportProgress: true,
    observe: 'events'
  })
}
}
