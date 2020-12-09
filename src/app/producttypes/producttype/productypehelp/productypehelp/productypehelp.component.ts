import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productypehelp',
  templateUrl: './productypehelp.component.html',
  styleUrls: ['./productypehelp.component.css']
})
export class ProductypehelpComponent implements OnInit {
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
