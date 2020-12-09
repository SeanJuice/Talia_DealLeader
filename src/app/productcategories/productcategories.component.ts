import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductcategoryService } from 'src/app/shared/productcategory/productcategory.service';
import { ProductcategorieshelpComponent } from './productcategorieshelp/productcategorieshelp/productcategorieshelp.component';

@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.component.html',
  styleUrls: ['./productcategories.component.css']
})
export class ProductcategoriesComponent implements OnInit {

  updateCommissionForm: FormGroup;
  id: any;

  constructor(public service : ProductcategoryService,
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
          PRODUCT_CATEGORY_ID : null,
          PRODUCT_CATEGORY_NAME : "",
          PRODUCT_CATEGORY_DESCRIPTION :""
        };
      }
      
      onSubmit(form : NgForm){
        this.updateRecord(form);
      }
          
      updateRecord(form: NgForm){
        if(confirm('Are you sure you want to update this record?')){
        this.service.putProductCategory(form.value).subscribe(res => {
          this.toastr.info('Updated Successfully.','Product Category');
          this.resetForm(form);
          this.service.getProductCategory();
        })
      }
    }

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(ProductcategorieshelpComponent, dialogConfig);
    }

}
