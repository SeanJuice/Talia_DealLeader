import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commission-help',
  templateUrl: './commission-help.component.html',
  styleUrls: ['./commission-help.component.css']
})
export class CommissionHelpComponent implements OnInit {
  
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
