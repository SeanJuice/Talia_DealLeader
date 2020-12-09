import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgentService } from 'src/app/shared/agent.service';
import { Reset } from 'src/app/shared/loginuser/reset/reset.model';
import { UserService } from 'src/app/shared/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formData: Reset;
  id: any;
  updateResetForm: FormGroup;
  dontmatch : string = 'Passwords Do Not Match!';

  error_messages = {
    'PASSWORD': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be 6 characters in length.' },
    ],
    'CPASSWORD': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be 6 characters in length.' },
    ],   
  }



  constructor(  
    public toastr : ToastrService,
    public service: UserService,
    private actRoute: ActivatedRoute,
    public Agentservice: AgentService,
    public router : Router, 
    public fb: FormBuilder) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.updateResetForm = this.fb.group({
      PASSWORD: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      CPASSWORD: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    }, {
      validators: this.PASSWORD.bind(this)
    });
     }


  ngOnInit(): void {
  }

  PASSWORD(formGroup: FormGroup){
    const {value: PASSWORD} = formGroup.get('PASSWORD');
    const {value: CPASSWORD} = formGroup.get('CPASSWORD');
    return PASSWORD === CPASSWORD ?null : {passwordNotMatch: true};
  }



  getUserData(id) {
    this.Agentservice.getUserDetails(id).subscribe(res => {
      console.log(id)
      this.updateResetForm.patchValue({
        USER_ID : res['USER_ID'],
        PASSWORD :res['PASSWORD'],
        CPASSWORD :res['CPASSWORD'],
      });
    });
  }
  updateForm() {
    if (!this.updateResetForm.valid) {
      return false;
    } else 
    {
      this.Agentservice.updatePasswrod(this.id, this.updateResetForm.value)
        .subscribe((res) => {
          this.updateResetForm.reset();
          this.toastr.success('Password Reset Successfully', 'User');
        })
    }
}



}
