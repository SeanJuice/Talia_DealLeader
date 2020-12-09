import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(public http:HttpClient) { }

  getTitleList(){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL+'/api/Title', { headers: reqHeader }).toPromise();
  }
}
