import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaddetailshelp',
  templateUrl: './leaddetailshelp.component.html',
  styleUrls: ['./leaddetailshelp.component.css']
})
export class LeaddetailshelpComponent implements OnInit {
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
