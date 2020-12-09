import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rfqhelp',
  templateUrl: './rfqhelp.component.html',
  styleUrls: ['./rfqhelp.component.css']
})
export class RfqhelpComponent implements OnInit {

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
