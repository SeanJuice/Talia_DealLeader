import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetingtypeshelp',
  templateUrl: './meetingtypeshelp.component.html',
  styleUrls: ['./meetingtypeshelp.component.css']
})
export class MeetingtypeshelpComponent implements OnInit {
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
