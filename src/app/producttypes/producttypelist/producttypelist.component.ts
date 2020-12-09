import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/shared/product-type/product-type.service';
import { ToastrService } from 'ngx-toastr';
import { ProductType } from 'src/app/shared/product-type/product-type.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProducttypelisthelpComponent } from './producttypelisthelp/producttypelisthelp/producttypelisthelp.component';

@Component({
  selector: 'app-producttypelist',
  templateUrl: './producttypelist.component.html',
  styleUrls: ['./producttypelist.component.scss']
})
export class ProducttypelistComponent implements OnInit {
  SearchProdType;
  data: ProductType[] = [];
  errorMessage : string;
  showError: boolean;

  constructor(public service : ProductTypeService,
    private toastr : ToastrService,
    public router : Router,
    public dialog: MatDialog,  ) { }

    ngOnInit(): void {
      if (!localStorage.getItem("accessToken")){
        this.router.navigate([""]);
      }
      else{
        this.service.getProductType();
        this.service.getProductType().subscribe((res: ProductType[]) => {
          this.data = res;
        } );
      }
    }

    populateForm(at : ProductType){
      this.service.formData = Object.assign({},at);
    }


    onDelete(id : number){
      if(confirm('Are you sure you want to delete this record?')){
      this.service.deleteProducttype(id).subscribe((res : any) =>{
        if (res.Error){
          this.service.getProductType().subscribe((res: ProductType[]) => {
            this.data = res;
          } );
          this.errorMessage = res.Error;
          this.toastr.error('Cannot be deleted becuase it is being used', 'Product Type');
          this.showError = true;
        }
        else{
          this.service.getProductType().subscribe((res: ProductType[]) => {
            this.data = res;
          } );
          this.toastr.warning('Deleted Successfully', 'Product Type');
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
      this.dialog.open(ProducttypelisthelpComponent, dialogConfig);
    }

}
