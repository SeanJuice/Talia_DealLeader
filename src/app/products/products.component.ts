import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductTypeService } from 'src/app/shared/product-type/product-type.service';
import {ProductService} from 'src/app/shared/product/product.service';
import { NgForm } from '@angular/forms';
import { ProductType } from 'src/app/shared/product-type/product-type.model';
import {Product} from 'src/app/shared/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductshelpComponent } from './productshelp/productshelp/productshelp.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  formData : Product;
  producttypeList : ProductType[]; 
  id: any;

  constructor(public service : ProductService,
    private toastr : ToastrService,
    public productTypeService :ProductTypeService,
    private actRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router : Router) { 
      this.id = this.actRoute.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
              // this.data$ = this.getProductCa();
     this.productTypeService.getProductType().subscribe(res => this.producttypeList = res as  ProductType[]);
      }
    }

   resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
    PRODUCT_ID :null,
    PRODUCT_TYPE_ID: null,
    PRODUCT_NAME: '',
    PRODUCT_DESCRIPTION: '',
    YEAR_OF_MAKE: ''
   };
  }

  onSubmit(form : NgForm){
    this.updateRecord(form);
  }

  updateRecord(form: NgForm){
    if(confirm('Are you sure you want to update this record?')){
    this.service.UpdateProduct(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully.','Product');
      this.resetForm(form);
      this.service.get();
    })
  }}

  openInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(ProductshelpComponent, dialogConfig);
  }
  

}