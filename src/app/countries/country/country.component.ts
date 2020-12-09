import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/country/country.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CountryhelpComponent } from './countryhelp/countryhelp/countryhelp.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  errorMessage : string;
  showError: boolean;

  constructor(public service : CountryService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.resetForm();
    }
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      COUNTRY_ID: null,
      COUNTRY_NAME: '',
    };
  }

  onSubmit(form : NgForm){
    if(form.value.COUNTRY_ID ==null)
      this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
      this.service.create(form.value).subscribe((res: any) => {
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This country already exists', 'Country');
          this.showError = true;
        }
        else{
          this.toastr.success('Added Successfully.','Country');
          this.resetForm(form);
          this.service.refreshList();
          this.showError = false;
        }
      });
    }
  }

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(CountryhelpComponent, dialogConfig);
  }

}

