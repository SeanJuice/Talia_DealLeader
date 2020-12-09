import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Country } from './country.model';
import {Observable} from "rxjs";
import { COUNTRY } from './country/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  formData : Country;
  list : Country[];

  constructor(private http:HttpClient) { }

  getCountryList(){
    return this.http.get(environment.loginURL+ '/api/Country').toPromise();
  }

  create(formData: Country){
    return this.http.post(environment.loginURL+'/api/Country' ,formData);
  }

  refreshList(): Observable<COUNTRY[]>{
    return this.http.get<COUNTRY[]>(environment.loginURL+'/api/Country')
  }

  update(formData: Country): Observable<COUNTRY> {
    return this.http.put<COUNTRY>(environment.loginURL + '/api/Country/update/' + formData.COUNTRY_ID, formData);
  }

  delete(id : number){
    return this.http.delete(environment.loginURL+'/api/Country/'+id);
  }
}
