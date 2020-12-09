import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Event} from './event.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {

  formData : Event;
  list : Event[];

  constructor(private http: HttpClient) { }


  /*CreateAppointment(data: any): Observable<any> {
    return this.http.post("http://localhost:51785/api/EVENTTs", data).pipe(map((res: any) => {
        console.log(res);
        return res;
    }));}*/

    CreateAppointment(formData: Event){
      return this.http.post("http://localhost:51785/api/EVENTTs",formData);
    }

  get(): Observable<any> {
      
    return this.http.get("http://localhost:51785/api/EVENTTs");
    }


  GetAppointment(appointmentId: any): Observable<any> {
    return this.http.get("http://localhost:51785/api/EVENTTs/" + appointmentId );
  }

  UpdateAppointment(id : any): Observable<any> {
    return this.http.put("http://localhost:51785/api/EVENTTs/", id);
  }


  DeleteAppointment(id : any): Observable<any> {
    console.log("reached delete appointment");
    return this.http.delete("http://localhost:51785/api/EVENTTs/" + id);
  }
  }