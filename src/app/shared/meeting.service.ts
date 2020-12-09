import { Injectable } from '@angular/core';
import { MEETING } from './meeting.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  formData : MEETING;
  list : MEETING[];
  readonly rootURL ="https://localhost:44377/api"

  constructor(public http : HttpClient) { }

 refreshList(): Observable<MEETING[]> {
    return this.http.get<MEETING[]>(this.rootURL+'/GetAll')
    // .toPromise().then(res => this.list = res as Supplier[]);
  }

  postMeeting(formData: MEETING){
    return this.http.post(this.rootURL+'/meeting/create',formData);
  }

  delete(id){
    console.log('service '+id);
    return this.http.delete(this.rootURL+'/meeting/delete/'+id);
  }

  rescheduleMeeting(formData: MEETING, id){
    return this.http.post(this.rootURL+'/meeting/reschedule/'+id,formData);
  }

  getSchedule(){
    return this.http.get(this.rootURL+'/meeting/getMeetingSlots');
    //.pipe(map(result=>result));
  }

  getSlots(date){
    return this.http.get(this.rootURL+'/meeting/getSLots/'+date);
  }

  
 
}

