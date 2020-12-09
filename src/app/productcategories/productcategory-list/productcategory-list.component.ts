import { Component, OnInit } from '@angular/core';
import { ProductcategoryService } from 'src/app/shared/productcategory/productcategory.service';
import { ToastrService } from 'ngx-toastr';
import { Productcategory } from 'src/app/shared/productcategory/productcategory.model';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProductcategorylisthelpComponent } from './productcategorylisthelp/productcategorylisthelp/productcategorylisthelp.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productcategory-list',
  templateUrl: './productcategory-list.component.html',
  styleUrls: ['./productcategory-list.component.css']
})
export class ProductcategoryListComponent implements OnInit {

  data: Productcategory[] = [];
  SearchProdCat;
  errorMessage : string;
  showError: boolean;

  constructor(public service : ProductcategoryService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog, ) { }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
        this.service.refreshList();
        this.service.refreshList().subscribe((res: Productcategory[]) => {
          this.data = res;
        } );
      }
    }

    populateForm(at : Productcategory){
      this.service.formData = Object.assign({},at);
    }

    onDelete(id : number){
      if(confirm('Are you sure you want to delete this record?')){
      this.service.deleteProductCategory(id).subscribe((res : any) =>{
        if (res.Error){
          this.service.refreshList().subscribe((res: Productcategory[]) => {
            this.data = res;
          } );
          this.errorMessage = res.Error;
          this.toastr.error('Cannot be deleted becuase it is being used', 'Product Category');
          this.showError = true;
        }
        else{
          this.service.refreshList().subscribe((res: Productcategory[]) => {
            this.data = res;
          } );
          this.toastr.warning('Deleted Successfully', 'Product Category');
          this.showError = false;
        }
      })
    }
    }

    openInfo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "50%";
      this.dialog.open(ProductcategorylisthelpComponent, dialogConfig);
    }

}
