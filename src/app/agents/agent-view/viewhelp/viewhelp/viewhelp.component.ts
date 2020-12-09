import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewhelp',
  templateUrl: './viewhelp.component.html',
  styleUrls: ['./viewhelp.component.css']
})
export class ViewhelpComponent implements OnInit {
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
