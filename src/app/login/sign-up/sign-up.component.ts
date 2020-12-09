import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Loginuser } from 'src/app/shared/loginuser/loginuser.model';
import { LoginuserService } from 'src/app/shared/loginuser/loginuser.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user : Loginuser;
  roles : any[];

  constructor(public loginuserService : LoginuserService,
    public toastr : ToastrService,
    public router : Router) { }

  ngOnInit(): void {
    this,this.resetForm();
    this.loginuserService.getAllRoles().subscribe(
      (data : any)=> {
        data.forEach(obj => obj.selected = false);
        this.roles = data;
    });
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user = {
      UserName : '',
      Password: '',
    }
    if (this.roles)
    this.roles.map(x => x.selected = false);
  }

  onSubmit(form : NgForm){
    var x = this.roles.filter(x => x.selected).map(y => y.Name);
    this.loginuserService.registerUser(form.value,x)
      .subscribe((data: any) => {
        if (data.Succeeded != '') {
          localStorage.setItem('agentID', data.Succeeded);
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
      this.router.navigate[('/login')]
  }

  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
  }

}
