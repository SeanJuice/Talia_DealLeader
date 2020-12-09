import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/agent.service';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css']
})
export class ForgottenComponent implements OnInit {
  formData: FormGroup;
  errorMessage : string;
  showError: boolean;

  constructor(public Agentservice: AgentService,
    public fb: FormBuilder,
    private zone: NgZone,
    private router: Router,
    private actRoute: ActivatedRoute) { 
      this.formData = this.fb.group({
        AGENT_EMAIL_ADDRESS :'',
      });
    }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.Agentservice.checkEmail(this.formData.value).subscribe((res: any) => {
      if(res.Error){
        this.errorMessage = res.Error;
        this.showError = true;
        this.formData.reset();
      }
      else {
        localStorage.setItem("USER_ID", res.USER_ID);

        this.Agentservice.postEmail(parseInt(localStorage.getItem("USER_ID")));
        console.log(parseInt(localStorage.getItem("USER_ID")))        
        this.router.navigate(['/checkemail']);
      }
    })
  }
}
