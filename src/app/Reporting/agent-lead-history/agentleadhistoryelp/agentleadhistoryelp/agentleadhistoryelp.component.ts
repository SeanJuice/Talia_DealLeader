import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentleadhistoryelp',
  templateUrl: './agentleadhistoryelp.component.html',
  styleUrls: ['./agentleadhistoryelp.component.css']
})
export class AgentleadhistoryelpComponent implements OnInit {
  imageUrl : string = "/assets/4.JPG";

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
    }
  }

}
