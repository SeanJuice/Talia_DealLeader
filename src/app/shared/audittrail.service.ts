import { Injectable } from '@angular/core';
// import { SUPPLIER } from './supplier.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AudittrailService {

  readonly rootURL ="https://localhost:44377/api"

  constructor(public http : HttpClient) { }

  auditTrail(){
    return this.http.get(this.rootURL+'/audittrail/GetAll')
}
}
