import { Injectable } from '@angular/core';
import { AGENTSTATUS } from './agentstatus';
import { HttpClient  } from '@angular/common/http';
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class AgentStatusService {

  formData : AGENTSTATUS;
  list : AGENTSTATUS[];
  rootURL ="https://localhost:44377/api";

  
  constructor(private http : HttpClient) { }

  refreshList(): Observable<AGENTSTATUS[]> {
    return this.http.get<AGENTSTATUS[]>(this.rootURL+ '/Agentstatus');
    
  }

  // putEmployee(formData: AGENTSTATUS): Observable<AGENTSTATUS> {
  //   return this.http.put<AGENTSTATUS>(this.rootURL + '/AGENTs/', formData);
  // }
}