import { Injectable } from '@angular/core';
import { COUNTRY } from './country.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  formData : COUNTRY;
  list : COUNTRY[];

  constructor(public http : HttpClient) { }

  create(formData: COUNTRY){
    return this.http.post(environment.loginURL +'/api/Country' ,formData);
  }

  refreshList(): Observable<COUNTRY[]>{
   //var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get<COUNTRY[]>(environment.loginURL+'/api/Country');
    //.toPromise().then(res => this.list = res as COUNTRY[]);
  }

  update(formData: COUNTRY){
    return this.http.put<COUNTRY>(environment.loginURL + '/api/Country/' + formData.COUNTRY_ID, formData);
  }

  delete(id : number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.delete(environment.loginURL +'/api/Country/'+id, { headers: reqHeader });
  }
}

