import { Component, OnInit } from '@angular/core';
import { ProductcategoryService } from 'src/app/shared/productcategory/productcategory.service';
import { ToastrService } from 'ngx-toastr';
import { ProductTypeService } from 'src/app/shared/product-type/product-type.service';
import { NgForm } from '@angular/forms';
import { ProductType } from 'src/app/shared/product-type/product-type.model';
import { ProductCategory } from 'src/app/shared/product-category/product-category.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductypehelpComponent } from './productypehelp/productypehelp/productypehelp.component';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.scss']
})
export class ProducttypeComponent implements OnInit {

 formData : ProductType;
 productcategoryList : ProductCategory[]; 

 data$;
 errorMessage : string;
 showError: boolean;

  constructor(public service : ProductTypeService,
    private toastr : ToastrService,
    public productcategoryService : ProductcategoryService,
    public router : Router,
    public dialog: MatDialog,) { }


    getProductCa(){
      return this.productcategoryService.refreshList();
    }
  
    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
        this.resetForm();
        // this.data$ = this.getProductCa();
       this.productcategoryService.getProductCategory().subscribe(res => this.productcategoryList = res as  ProductCategory[]);
      }    
   }
  
    resetForm(form? : NgForm){
      if(form != null)
      form.resetForm();
      this.service.formData = {
        PRODUCT_TYPE_ID: null,
        PRODUCT_CATEGORY_ID: null,
        PRODUCT_TYPE_NAME: '',
        PRODUCT_TYPE_DESCRIPTION:'',
      };
    }
  
    onSubmit(form : NgForm){
      this.insertRecord(form);
    }
  
    insertRecord(form: NgForm){
      if(confirm('Are you sure you want to add this record?')){
      this.service.postProducttype(form.value).subscribe((res: any) => {
      if(res.Error){
        this.errorMessage = res.Error;
        this.toastr.error('This product type already exists', 'Product Type');
        this.showError = true;
      }
      else{
        this.toastr.success('Added Successfully.','Product Type');
        this.resetForm(form);
        this.service.refreshList();
        this.showError = false;
      }
    });
    }}

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(ProductypehelpComponent, dialogConfig);
    }
}
