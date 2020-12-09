import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeetypelisthelp',
  templateUrl: './employeetypelisthelp.component.html',
  styleUrls: ['./employeetypelisthelp.component.css']
})
export class EmployeetypelisthelpComponent implements OnInit {
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
