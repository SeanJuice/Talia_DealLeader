import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudittrailService } from 'src/app/shared/audittrail.service';


@Component({
  selector: 'app-audittrail',
  templateUrl: './audittrail.component.html',
  styleUrls: ['./audittrail.component.css']
})
export class AudittrailComponent implements OnInit {

  auditTrail: any;

  constructor(public service : AudittrailService,
    public router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.audit();
    }
  }

  audit(){
    this.auditTrail = this.service.auditTrail();
  }

}
