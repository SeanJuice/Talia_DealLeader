import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product/product.service';
import { Product } from 'src/app/shared/product/product.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductlisthelpComponent } from './productlisthelp/productlisthelp/productlisthelp.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  SearchProd;
  data: Product[] = [];
  selected: Product;
  id : any;
  errorMessage : string;
  showError: boolean;

  constructor(public service : ProductService,
    public toastr : ToastrService,
    public router: Router,
    public dialog: MatDialog,) { }

  ngOnInit() {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.service.get();
        this.service.get().subscribe((res: Product[]) => {
          this.data = res;
        } );
    }
  }

  populateForm(at : Product){
    this.service.formData = Object.assign({},at);
    console.log(at)
  }

  onDelete(id : number){
    if(confirm('Are you sure you want to delete this record?')){
    this.service.DeleteProduct(id).subscribe((res : any) =>{
      if (res.Error){
        this.service.get().subscribe((res: Product[]) => {
          this.data = res;
        } );
        this.errorMessage = res.Error;
        this.toastr.error('Cannot be deleted becuase it is being used', 'Product');
        this.showError = true;
      }
      else{
        this.service.get().subscribe((res: Product[]) => {
          this.data = res;
        } );
        this.toastr.warning('Deleted Successfully', 'Product');
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
    this.dialog.open(ProductlisthelpComponent, dialogConfig);
  }

}
