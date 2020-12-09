import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agentlist-help',
  templateUrl: './agentlist-help.component.html',
  styleUrls: ['./agentlist-help.component.css']
})
export class AgentlistHelpComponent implements OnInit {
  imageUrl : string = "/assets/4.JPG";

  constructor() { }

  ngOnInit(): void {
  }

}
