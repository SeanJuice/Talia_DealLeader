import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/shared/supplier/supplier.service';
import { SUPPLIER } from 'src/app/shared/supplier/supplier.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  SearchCountries;
  data: SUPPLIER[];
  errorMessage : string;
  showError: boolean;

  constructor(public service : SupplierService,
    private toastr : ToastrService,
    public router : Router) { }


  ngOnInit(): void {
    if (!localStorage.getItem("accessToken")){
      this.router.navigate([""]);
    }
    else{
      this.service.refreshList().subscribe((res: SUPPLIER[]) => {
        this.data = res;
      } );
    }
  }

populateForm(at : SUPPLIER){
  this.service.formData = Object.assign({},at);
}


onDelete(id : number){
  if(confirm('Are you sure you want to delete this record?')){
    this.service.deleteSupplier(id).subscribe((res : any) =>{
    if (res.Error){
      this.service.refreshList().subscribe((res: SUPPLIER[]) => {
        this.data = res;
      } );
      this.errorMessage = res.Error;
      this.toastr.error('Cannot be deleted becuase it is being used', 'Supplier');
      this.showError = true;
    }
    else{
      this.service.refreshList().subscribe((res: SUPPLIER[]) => {
        this.data = res;
      } );
      this.toastr.warning('Deleted Successfully', 'Supplier');
      this.showError = false;
    }
  })
}
}


}

