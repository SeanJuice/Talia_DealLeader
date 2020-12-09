import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Loginuser } from './loginuser.model';
import { environment } from 'src/environments/environment';
import { Agent } from '../agent.model';
import { User } from '../user/user.model';
import { Router } from '@angular/router';
import { Userlogin } from '../userlogin/userlogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(public http : HttpClient) { }

  registerUser(user : Loginuser, roles : string[]){
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Roles : roles,
    }
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.post(environment.loginURL + '/api/User/Register', body, {headers : reqHeader});
  }

  Login(user : User){
    return this.http.post(environment.loginURL + 'User/Login', user);
  }

  userAuthentication(user : any)
    {
      const body = {
        Username : user.UserName,
        Passwrod : user.Password,
      }
    return this.http.post('https://localhost:44377/api/User/Login' , body );

  }

  // getUserClaims(){
  //   return  this.http.get(environment.loginURL+'/api/GetUserClaims');
  //  }

  getAllRoles() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(environment.loginURL + '/api/UserRole/GetROLEs', { headers: reqHeader });
  }

  // roleMatch(allowedRoles): boolean {
  //   var isMatch = false;
  //   var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
  //   allowedRoles.forEach(element => {
  //     if (userRoles.indexOf(element) > -1) {
  //       isMatch = true;
  //       return false;
  //     }
  //   });
  //   return isMatch;

  // }

  getUserDetails(session : any){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL + 'api/User/getUserDetails', { headers: reqHeader } )
  }
}
