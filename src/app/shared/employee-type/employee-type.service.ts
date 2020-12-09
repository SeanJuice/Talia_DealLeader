import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { environment } from 'src/environments/environment';
import { EMPLOYEE_TYPE } from './employee-type';


@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  formData : EMPLOYEE_TYPE;
  list : EMPLOYEE_TYPE[];

  
  constructor(private http : HttpClient) { }

  postEmployeeType(formData: EMPLOYEE_TYPE){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL +'/api/EmployeeType/',formData, { headers: reqHeader });
  }

  refreshList(): Observable<EMPLOYEE_TYPE[]> {
    return this.http.get<EMPLOYEE_TYPE[]>(environment.loginURL+ '/api/EmployeeType/'); 
    
  }

  putEmployeeType(formData: EMPLOYEE_TYPE): Observable<EMPLOYEE_TYPE> {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.put<EMPLOYEE_TYPE>(environment.loginURL + '/api/EmployeeType/update/'+ formData.EMPLOYEE_TYPE_ID, formData, { headers: reqHeader });
  }

  deleteEmployeeType(id : number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.delete(environment.loginURL+'/api/EmployeeType/'+id, { headers: reqHeader });
  }

  getEmployeeTypeList(){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL+'/api/EmployeeType', { headers: reqHeader }).toPromise();
  }
}
