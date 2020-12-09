import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product/product.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product/product.model';
import { Router } from '@angular/router';
import { ProductType } from 'src/app/shared/product-type/product-type.model';
import { ProductTypeService } from 'src/app/shared/product-type/product-type.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProducthelpComponent } from './producthelp/producthelp/producthelp.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producttype :  ProductType[];
  dataArray: Observable<Product[]>;
  dataArray$;
  data$;
  errorMessage : string;
  showError: boolean;

  constructor(public service : ProductService,
    private toastr : ToastrService,
    public router : Router,
    public productTypeService : ProductTypeService,
    public dialog: MatDialog,) { }

  ngOnInit() {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.productTypeService.getProductType().subscribe(res => this.producttype = res as ProductType[]);
      console.log(this.producttype)
      this.resetForm();
    }
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      PRODUCT_ID: null,
      PRODUCT_TYPE_ID: null,
      PRODUCT_NAME: "",
      PRODUCT_DESCRIPTION: "",
      YEAR_OF_MAKE: "",
    };
  }

  onSubmit(form : NgForm){
      this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
      this.service.CreateProduct(form.value).subscribe((res: any) => {  
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This product already exists', 'Product');
          this.showError = true;
        }
        else{
          this.toastr.success('Added Successfully.','Product');
          this.resetForm(form);
          this.service.get();
          this.showError = false;
        }
      
  });
  }}

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(ProducthelpComponent, dialogConfig);
  }
}
