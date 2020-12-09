import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userrole-help',
  templateUrl: './userrole-help.component.html',
  styleUrls: ['./userrole-help.component.css']
})
export class UserroleHelpComponent implements OnInit {
  imageUrl : string = "/assets/4.JPG";

  constructor() { }

  ngOnInit(): void {
  }

}
