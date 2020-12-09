import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/country.service';
import { COUNTRY } from 'src/app/shared/country/country.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CountrylisthelpComponent } from './countrylisthelp/countrylisthelp/countrylisthelp.component';



@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  SearchCountries;
  data: COUNTRY[] = [];
  errorMessage : string;
  showError: boolean;
  imageUrl : string = "/assets/4.JPG";
  session: any;


  constructor(public service : CountryService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.service.refreshList().subscribe((res: COUNTRY[]) => {
        this.data = res;
      } );
    }
  }

populateForm(at : COUNTRY){
  this.service.formData = Object.assign({},at);
}

onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
  this.service.delete(id).subscribe((res : any) =>{
    if (res.Error){
      this.service.refreshList().subscribe((res: COUNTRY[]) => {
        this.data = res;
      } );
      this.errorMessage = res.Error;
      this.toastr.error('Cannot be deleted becuase it is being used', 'Country');
      this.showError = true;
    }
    else{
      this.service.refreshList().subscribe((res: COUNTRY[]) => {
        this.data = res;
      } );
      this.toastr.warning('Deleted Successfully', 'Country');
      this.showError = false;
    }
  })
}
}

openInfo(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  this.dialog.open(CountrylisthelpComponent, dialogConfig);
}


}

