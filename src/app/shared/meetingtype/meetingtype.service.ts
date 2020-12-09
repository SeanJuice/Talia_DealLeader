import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Meetingtype } from 'src/app/shared/meetingtype/meetingtype';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingtypeService {

  formData : Meetingtype;
  list : Meetingtype[];


  constructor(private http : HttpClient) { }

  getMeetingtype(): Observable<Meetingtype[]>{
    return this.http.get<Meetingtype[]>(environment.loginURL + '/api/MeetingType');
  }

  getLastMeetingType(){
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(environment.loginURL + '/api/LastMeetingType', {headers : reqHeader}).toPromise();
  }

  getLastId(){
   return this.list[this.list.length].MEETING_TYPE_ID;
  }


  postMeetingtype(formData: Meetingtype){
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.post(environment.loginURL +'/api/MeetingType',formData, {headers : reqHeader});
  }

  refreshList(){
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
  this.http.get(environment.loginURL+'/api/MeetingType', {headers : reqHeader})
  .toPromise().then(res => this.list = res as Meetingtype[]);
  }

  putMeetingtype(formData: Meetingtype): Observable<Meetingtype>{
    return this.http.put<Meetingtype>(environment.loginURL+'/api/MeetingType/update/'+formData.MEETING_TYPE_ID,formData);
    
  }

  deleteMeetingtype(id : number){
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.delete(environment.loginURL+'/api/MeetingType/'+id, {headers : reqHeader});
  }
}
