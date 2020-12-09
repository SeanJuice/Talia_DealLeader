import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentleaddetails-help',
  templateUrl: './agentleaddetails-help.component.html',
  styleUrls: ['./agentleaddetails-help.component.css']
})
export class AgentleaddetailsHelpComponent implements OnInit {
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
