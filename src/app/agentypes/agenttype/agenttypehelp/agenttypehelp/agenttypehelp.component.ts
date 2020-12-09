import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenttypehelp',
  templateUrl: './agenttypehelp.component.html',
  styleUrls: ['./agenttypehelp.component.css']
})
export class AgenttypehelpComponent implements OnInit {
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
