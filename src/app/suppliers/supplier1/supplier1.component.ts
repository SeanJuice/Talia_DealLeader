import { Component, OnInit } from '@angular/core';
import { SupplierService} from 'src/app/shared/supplier.service';
import { NgForm, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Country } from 'src/app/shared/country.model';
import { CountryService } from 'src/app/shared/country.service';
import { ProductService } from 'src/app/shared/product/product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier1',
  templateUrl: './supplier1.component.html',
  styleUrls: ['./supplier1.component.css']
})
export class Supplier1Component implements OnInit {

  products: any;
  countryList: Country[];
  errorMessage : string;
  showError: boolean;

  constructor(public service : SupplierService,
    private toastr : ToastrService,
    private router: Router,
    public countryService: CountryService,
    public productService: ProductService,
    public dialog: MatDialog,) { }

ngOnInit(): void {
  if (!localStorage.getItem("accessToken")){
    this.router.navigate([""]);
  }
  else{
    this.resetForm();
    this.GetProducts();
    console.log(this.products)
    this.countryService.getCountryList().then(res => this.countryList = res as Country[]);
    console.log(this.countryList)
  }
}

GetProducts() {
  this.service.GetProducts().subscribe(data => {
    this.products = data;
    console.log(this.products);
  },
    error => {
      console.log(error);
    });
}


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
    RATING_ID: 1
  };
}

onSubmit(form : NgForm){
    this.insertRecord(form);
  
}

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
    this.service.postSupplier(form.value).subscribe((res: any) => {
      if(res.Error){
        this.errorMessage = res.Error;
        this.toastr.error('This supplier already exists', 'Supplier');
        this.showError = true;
      }
      else{
      this.toastr.success('Added Successfully.','Supplier');
      this.resetForm(form);
      this.service.refreshList();
      this.showError = false;
      }
  });
  }}
 
}

