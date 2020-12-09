import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countrylisthelp',
  templateUrl: './countrylisthelp.component.html',
  styleUrls: ['./countrylisthelp.component.css']
})
export class CountrylisthelpComponent implements OnInit {
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
