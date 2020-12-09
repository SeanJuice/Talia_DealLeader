import { Injectable } from '@angular/core';
import { TITLE } from 'src/app/shared/employee/title.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TitleService {

  formData : TITLE;
  list : TITLE[];

  
  constructor(private http : HttpClient) { }

  // refreshList(): Observable<TITLE[]> {
  //   var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  //   return this.http.get<TITLE[]>(environment.loginURL+ '/api/Title', { headers: reqHeader }); //make changes on all other gets to post 
  // }
}
