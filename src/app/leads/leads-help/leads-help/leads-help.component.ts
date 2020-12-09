import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads-help',
  templateUrl: './leads-help.component.html',
  styleUrls: ['./leads-help.component.css']
})
export class LeadsHelpComponent implements OnInit {
  imageUrl : string = "/assets/4.JPG";

  constructor(public router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
    }
  }

}
