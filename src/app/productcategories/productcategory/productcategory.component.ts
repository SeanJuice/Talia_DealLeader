import { Component, OnInit } from '@angular/core';
import { ProductcategoryService } from 'src/app/shared/productcategory/productcategory.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductcathelpComponent } from './productcathelp/productcathelp/productcathelp.component';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {
  errorMessage : string;
  showError: boolean;

  constructor(public service : ProductcategoryService,
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
      PRODUCT_CATEGORY_ID : null,
      PRODUCT_CATEGORY_NAME : "",
      PRODUCT_CATEGORY_DESCRIPTION :""
    };
  }

  onSubmit(form : NgForm){
    if(form.value.COUNTRY_ID ==null)
      this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    if(confirm('Are you sure you want to add this record?')){
      this.service.postProductCategory(form.value).subscribe((res: any) => {
        if(res.Error){
          this.errorMessage = res.Error;
          this.toastr.error('This product category already exists', 'Product Category');
          this.showError = true;
        }
        else{
          this.toastr.success('Added Successfully.','Product Category');
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
    this.dialog.open(ProductcathelpComponent, dialogConfig);
  }
}