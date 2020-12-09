import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/app/shared/loginuser/loginuser.service';
import { Router  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Userlogin } from 'src/app/shared/userlogin/userlogin.model';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  user : Userlogin;
  session: any;
  constructor(private loginService : LoginuserService,
    private router : Router,
    public toastr : ToastrService) { }
    url="./assets/4.JPG";
    errorMessage : string;
    showError: boolean;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user = {
      USER_ID : null,
      USER_NAME : '',
      PASSWORD : '',
      USER_ROLE_ID : null,
    }
  }

  OnSubmit(form : NgForm){
    this.loginService.userAuthentication(form.value).subscribe((res : any) => {
      if (res.Error){
        this.errorMessage = res.Error;
        this.showError = true;
        this.resetForm();
      }
      else {
        localStorage.setItem("accessToken", res.SessionID);
        localStorage.setItem("Role", res.Role);
        localStorage.setItem("AgentID" , res.AgentID);
        localStorage.setItem("EmployeeID", res.EmployeeID);
        localStorage.setItem("USER_ID", res.USER_ID);
        this.router.navigate(['/agentlanding']);
        this.showError = false;
        this.resetForm();
      }
    })
  }
}
