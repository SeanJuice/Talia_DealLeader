import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-reg-help',
  templateUrl: './agent-reg-help.component.html',
  styleUrls: ['./agent-reg-help.component.css']
})
export class AgentRegHelpComponent implements OnInit {

  imageUrl : string = "/assets/4.JPG";
  session: any;

  constructor(public router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
    }
  }

}
