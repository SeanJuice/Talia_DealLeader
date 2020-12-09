import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commissionlisthelp',
  templateUrl: './commissionlisthelp.component.html',
  styleUrls: ['./commissionlisthelp.component.css']
})
export class CommissionlisthelpComponent implements OnInit {

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
