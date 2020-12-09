import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentleads-help',
  templateUrl: './agentleads-help.component.html',
  styleUrls: ['./agentleads-help.component.css']
})
export class AgentleadsHelpComponent implements OnInit {

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
