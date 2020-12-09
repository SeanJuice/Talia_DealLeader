import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { LeadItem } from 'src/app/shared/lead-item.model';
import { ProductCategory } from "src/app/shared/product-category/product-category.model";
import { ProductType } from "src/app/shared/product-type/product-type.model";
import { Product } from "src/app/shared/product/product.model";
import { Condition } from "src/app/shared/condition/condition.model";
import { ProductCategoryService } from "src/app/shared/product-category/product-category.service";
import { ProductTypeService } from "src/app/shared/product-type/product-type.service";
import { ProductService } from "src/app/shared/product/product.service";
import { ConditionService } from "src/app/shared/condition/condition.service";
import { NgForm } from '@angular/forms';
import { LeadService } from 'src/app/shared/lead.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-items',
  templateUrl: './lead-items.component.html',
  styles: [
  ]
})
export class LeadItemsComponent implements OnInit {
  formData : LeadItem;
  productCategoryList: ProductCategory[];
  productTypeList: ProductType[];
  productList: Product[];
  conditionList: Condition[];
  id : number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<LeadItemsComponent>,
    public productCategoryService : ProductCategoryService,
    public productTypeService : ProductTypeService,
    public productService : ProductService,
    public conditionService : ConditionService,
    public leadService : LeadService,
    public router : Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      if(this.data.leadItemIndex == null)
      this.formData ={
        LEADPRODUCT_ID: null,
        PRODUCT_CATEGORY_ID: null,
        PRODUCT_TYPE_ID : null,
        PRODUCT_ID : null,
        LEAD_ID : this.data.LEAD_ID,
        QUANTITY : null,
        CONDITION_ID : null,
        CONDITION_NAME: '',
        PRODUCT_NAME: '',
        YEAR_OF_MAKE: '',
      }
      else{
        this.formData = Object.assign({}, this.leadService.leadItems[this.data.leadItemIndex]);
      }
      this.productCategoryService.getProductCategoryList().subscribe(res => {
        this.productCategoryList = res as ProductCategory[];
      });
      this.conditionService.getConditionList().then(res => this.conditionList = res as Condition[]);
    }
  }

  updateProduct(ctrl){
    if(ctrl.selectedIndex == null){
      this.formData.PRODUCT_NAME = '';
      this.formData.YEAR_OF_MAKE = '';
      this.formData.CONDITION_NAME = '';
    }
    else{
      this.formData.PRODUCT_NAME = this.productList[ctrl.selectedIndex-1].PRODUCT_NAME;
      this.formData.YEAR_OF_MAKE = this.productList[ctrl.selectedIndex-1].YEAR_OF_MAKE;
      this.formData.CONDITION_NAME = this.conditionList[ctrl.selectedIndex-1].CONDITION_NAME;
    }
  }

  onSubmit(form :NgForm){
    if(this.data.leadItemIndex == null){
      this.leadService.leadItems.push(form.value);
      console.log(this.leadService.leadItems)
    }
    else
    this.leadService.leadItems[this.data.leadItemIndex] = form.value;
    console.log(this.data.leadItemIndex)
    this.dialogRef.close();
  }

  prodCatChange(ctrl){
    var prodId = 0;
    if(ctrl.selectedIndex === 0){
        prodId = null;
    }
    else{
      prodId = this.productCategoryList[ctrl.selectedIndex -1].PRODUCT_CATEGORY_ID;
      this.productTypeService.getProductTypeList(prodId).subscribe(res => {
        this.productTypeList = res as ProductType[];
      })
    }
  }

  prodTypeChange(ctrl){
    var prodId = 0;
    if(ctrl.selectedIndex === 0){
        prodId = null;
    }
    else{
      prodId = this.productTypeList[ctrl.selectedIndex -1].PRODUCT_TYPE_ID;
      this.productService.getProductList(prodId).subscribe(res => {
        this.productList = res as Product[];
      })
    }
  }





}
