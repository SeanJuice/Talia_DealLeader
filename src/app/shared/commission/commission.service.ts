import { Injectable } from '@angular/core';
import { Commission } from './commission.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  formData : Commission;
  list : Commission[];

  constructor(public http : HttpClient) { }

  create(comission : Commission): Observable<Commission>{
    return this.http.post<Commission>(environment.loginURL +'/api/Commission',comission);
  }

  getCommission(id): Observable<Commission[]> {
    return this.http.get<Commission[]>(environment.loginURL+'/api/Commission/' + id);
  }

  refreshList(){
    this.http.get(environment.loginURL+'/api/Commission').toPromise().then(res => this.list = res as Commission[]);
  }

  update(formData : Commission){
    return this.http.put(environment.loginURL+'/api/Commission/update/'+ formData.COMMISSION_ID, formData);
  }

  delete(id : number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.delete(environment.loginURL +'/api/Commission/'+id, { headers: reqHeader });
  }
}
