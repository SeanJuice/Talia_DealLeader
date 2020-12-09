import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { environment } from 'src/environments/environment';
import { EMPLOYEE } from './employee.model';
import { TITLE } from './title.model';
import { Employeeupdate } from './employeeupdate/employeeupdate';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 data : Employeeupdate;
  formData : EMPLOYEE;
  list : EMPLOYEE[];
  Data : TITLE;
  Titlelist : TITLE[];

  constructor(public http : HttpClient) { }

  // refreshTiteList(): Observable<TITLE[]> {
  //   var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  //   return this.http.get<TITLE[]>(environment.loginURL+ '/api/Title', { headers: reqHeader }); //make changes on all other gets to post 
  // }

  postEmployee(formData: EMPLOYEE){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL +'/api/Employee', { headers: reqHeader });
  }

  getData(): Observable<EMPLOYEE[]> {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get<EMPLOYEE[]>(environment.loginURL+ '/api/Employee', { headers: reqHeader }); 
  }

  putEmployee( data: Employeeupdate): Observable<Employeeupdate> {
    return this.http.put<Employeeupdate>('https://localhost:44377/api/updateemployeeDetails/' + data.EMPLOYEE_ID , data);
  }
 
  getbyId(id) : any {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL + '/api/Employee/' +id, { headers: reqHeader });
  }

  deleteEmployee(id : number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.delete(environment.loginURL+'/api/Employee/'+id, { headers: reqHeader });
  }

  saveUser(formData : EMPLOYEE){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL+ '/api/Employee',formData, { headers: reqHeader });
  }

  getEmployeeList() : Observable<EMPLOYEE[]>{
    return this.http.get<EMPLOYEE[]>('https://localhost:44377/api/getEmployeeDetails?id=' + localStorage.getItem("EmployeeID"));
  }
}

