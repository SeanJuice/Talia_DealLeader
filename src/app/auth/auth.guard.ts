import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginuserService } from '../shared/loginuser/loginuser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(){}

}
