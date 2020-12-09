import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from 'src/app/shared/country.service';
import { CountrieshelpComponent } from './countrieshelp/countrieshelp/countrieshelp.component';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  id: any;

  constructor(public service : CountryService,
    private toastr : ToastrService,
    private actRoute: ActivatedRoute,
    public router : Router,
    public dialog: MatDialog,) { { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
    } }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
      }
    }

      resetForm(form? : NgForm){
        if(form != null)
        form.resetForm();
        this.service.formData = {
          COUNTRY_ID: null,
          COUNTRY_NAME: "",
        };
      }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
          
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.update(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Country');
          this.resetForm(form);
          this.service.refreshList();
        })
      }
    }

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(CountrieshelpComponent, dialogConfig);
    }

}
