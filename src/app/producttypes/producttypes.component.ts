import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductcategoryService } from 'src/app/shared/productcategory/productcategory.service';
import { ToastrService } from 'ngx-toastr';
import { ProductTypeService } from 'src/app/shared/product-type/product-type.service';
import { NgForm } from '@angular/forms';
import { ProductType } from 'src/app/shared/product-type/product-type.model';
import { ProductCategory } from 'src/app/shared/product-category/product-category.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductypeshelpComponent } from './productypeshelp/productypeshelp/productypeshelp.component';


@Component({
  selector: 'app-producttypes',
  templateUrl: './producttypes.component.html',
  styleUrls: ['./producttypes.component.scss']
})
export class ProducttypesComponent implements OnInit {

  formData : ProductCategory;
  productcategoryList : ProductCategory[]; 

  data$;
  id: any;

  constructor(public service : ProductTypeService,
    private toastr : ToastrService,
    public productcategoryService : ProductTypeService,
    public router : Router,
    private actRoute: ActivatedRoute,
    public dialog: MatDialog,) { 
      this.id = this.actRoute.snapshot.paramMap.get('id')
    }


    getProductCa(){
      return this.productcategoryService.refreshList();
    }
  
    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
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
      this.updateRecord(form);
    }
  
    updateRecord(form: NgForm){
      if(confirm('Are you sure you want to update this record?')){
      this.service.putProducttype(form.value).subscribe(res => {
        this.toastr.info('Updated Successfully.','Product Type');
        this.resetForm(form);
        this.service.refreshList();
      })
    }}

    
    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(ProductypeshelpComponent, dialogConfig);
    }

}
