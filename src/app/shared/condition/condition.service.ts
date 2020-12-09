import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Condition } from './condition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  formData : Condition;
  list : Condition[];

  constructor(private http :HttpClient) { }

  getConditionList(){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL+'/api/Condition', { headers: reqHeader }).toPromise();
  }

  create(formData: Condition){
    return this.http.post(environment.loginURL +'/api/Condition' ,formData);
  }

  refreshList(): Observable<Condition[]>{
    return this.http.get<Condition[]>(environment.loginURL+'/api/Condition');
  }

  update(formData: Condition){
    return this.http.put<Condition>(environment.loginURL + '/api/Condition/update/' + formData.CONDITION_ID, formData);
  }

  delete(id : number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.delete(environment.loginURL +'/api/Condition/'+id, { headers: reqHeader });
  }

}
