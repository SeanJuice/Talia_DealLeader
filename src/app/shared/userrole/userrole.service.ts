import { Injectable } from '@angular/core';
import { Userrole } from './userrole.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserroleService {

  formData : Userrole;
  list : Userrole[];

  constructor(public http : HttpClient) { }

  postUserRole(formData : Userrole){
  return this.http.post(environment.loginURL +'/api/UserRole', formData);
  }

  refreshList(){
    this.http.get(environment.loginURL+'/api/UserRole')
    .toPromise().then(res => this.list = res as Userrole[]);
  }

  putUserRole(formData : Userrole){
    console.log(environment.loginURL +'/userrole/'+formData.USER_ROLE_ID, formData)
    return this.http.put(environment.loginURL +'/api/UserRole/update/'+ formData.USER_ROLE_ID, formData);
    }

  deleteUserRole(id :number){
    return this.http.delete(environment.loginURL +'/api/UserRole/'+id);
  }
}
