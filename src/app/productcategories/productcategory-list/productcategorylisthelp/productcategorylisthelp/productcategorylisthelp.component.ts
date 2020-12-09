import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcategorylisthelp',
  templateUrl: './productcategorylisthelp.component.html',
  styleUrls: ['./productcategorylisthelp.component.css']
})
export class ProductcategorylisthelpComponent implements OnInit {
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
