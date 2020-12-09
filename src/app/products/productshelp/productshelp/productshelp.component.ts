import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productshelp',
  templateUrl: './productshelp.component.html',
  styleUrls: ['./productshelp.component.css']
})
export class ProductshelpComponent implements OnInit {
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
