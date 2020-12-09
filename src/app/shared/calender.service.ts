import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Calender } from './calender.model'
import { Calendar } from '@fullcalendar/angular';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  
  formData : Calendar;
  list : Calendar[];
  readonly rootURL ="https://localhost:44377/api"


  constructor(public http : HttpClient) { }
  
  postMeeting(formData: Calendar){

   return this.http.post(this.rootURL+'/meeting/create',formData);
  }

}
