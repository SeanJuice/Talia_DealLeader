import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productssoldhelp',
  templateUrl: './productssoldhelp.component.html',
  styleUrls: ['./productssoldhelp.component.css']
})
export class ProductssoldhelpComponent implements OnInit {
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
