import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelisthelp',
  templateUrl: './employeelisthelp.component.html',
  styleUrls: ['./employeelisthelp.component.css']
})
export class EmployeelisthelpComponent implements OnInit {
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
