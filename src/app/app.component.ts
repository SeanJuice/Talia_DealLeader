import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginuserService } from './shared/loginuser/loginuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DealLeader';

  constructor(public router : Router,
    public loginuserService : LoginuserService){}
  
    ngOnInit(){
      
    }

    Logout(){
      localStorage.removeItem('accessToken');
      localStorage.removeItem("Role");
      localStorage.removeItem("AgentID");
      localStorage.removeItem("USER_ID");
      localStorage.removeItem("EmployeeID");
      localStorage.removeItem("PRODUCT_ID");
      localStorage.removeItem("LEAD_ID");
      this.router.navigate(['/login']);
      window.location.reload();
    }
}