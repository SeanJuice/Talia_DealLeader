import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country } from '../shared/country.model';
import { CountryService } from '../shared/country.service';
import { SupplierService} from 'src/app/shared/supplier/supplier.service';
import { SUPPLIER } from '../shared/supplier/supplier.model';
import { Product } from '../shared/product/product.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  products: Product[];
  countryList: Country[];
  id: any;

  constructor(public service : SupplierService,
    private toastr : ToastrService,
    private router: Router,
    public countryService: CountryService,
    private actRoute: ActivatedRoute,) { { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
    } }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
        this.service.GetProducts().then(res => this.products = res as Product[]);
        this.countryService.getCountryList().then(res => this.countryList = res as Country[]);
      }
    }

    // GetProducts() {
    //   this.service.GetProducts().subscribe(data => {
    //     this.products = data;
    //   },
    //     error => {
    //       console.log(error);
    //     });
    // }

    resetForm(form? : NgForm){
      if(form != null)
      form.resetForm();
      this.service.formData = {
        PRODUCT_ID : null,
        PRODUCT_NAME : '',
        COUNTRY_ID : null,
        SUPPLIER_ID: null,
        SUPPLIER_NAME: "",
        SUPPLIER_PHYSICAL_ADDRESS: "",
        SUPPLIER_CONTACT_NO: "",
        SUPPLIER_EMAIL_ADDRESS: "",
      };
    }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
          
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.putSupplier(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Supplier');
          this.resetForm(form);
        })
      }}
      

}
