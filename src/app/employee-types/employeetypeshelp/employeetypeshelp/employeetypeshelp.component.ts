import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeetypeshelp',
  templateUrl: './employeetypeshelp.component.html',
  styleUrls: ['./employeetypeshelp.component.css']
})
export class EmployeetypeshelpComponent implements OnInit {
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
