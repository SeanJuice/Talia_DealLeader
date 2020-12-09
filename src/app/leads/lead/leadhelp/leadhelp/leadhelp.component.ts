import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadhelp',
  templateUrl: './leadhelp.component.html',
  styleUrls: ['./leadhelp.component.css']
})
export class LeadhelpComponent implements OnInit {
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
