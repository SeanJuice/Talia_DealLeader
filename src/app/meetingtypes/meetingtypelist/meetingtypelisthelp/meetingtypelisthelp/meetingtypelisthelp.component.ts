import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetingtypelisthelp',
  templateUrl: './meetingtypelisthelp.component.html',
  styleUrls: ['./meetingtypelisthelp.component.css']
})
export class MeetingtypelisthelpComponent implements OnInit {
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
