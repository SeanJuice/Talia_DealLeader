import { Component, OnInit } from '@angular/core';
import { SupplierService} from 'src/app/shared/supplier/supplier.service';
import { NgForm, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(public service : SupplierService,
    private toastr : ToastrService,
    public router : Router) { }

//   ngOnInit(): void {
// this.resetForm();
//   }

ngOnInit(): void {
  if (!localStorage.getItem("accessToken")){
    this.router.navigate([""]);
  }
  else{
    // this.resetForm();
  }
}


// resetForm(form? : NgForm){
//   if(form != null)
//   form.resetForm();
//   this.service.formData = {
//     SUPPLIER_ID: null,
//     SUPPLIER_NAME: "",
//     SUPPLIER_PHYSICAL_ADDRESS: "",
//     SUPPLIER_CONTACT_NO: "",
//     SUPPLIER_EMAIL_ADDRESS: "",
//   };
// }

onSubmit(form : NgForm){
  if(form.value.SUPPLIER_ID ==null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){
  if(confirm('Are you sure you want to add this record?')){
this.service.postSupplier(form.value).subscribe(res => {
  this.toastr.success('Added Successfully.','Supplier');
  // this.resetForm(form);
  this.service.refreshList();
});
}}
 
updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?')){
  this.service.putSupplier(form.value).subscribe(res => {
    this.toastr.warning('Updated Successfully.','Supplier');
    // this.resetForm(form);
    this.service.refreshList();
  })
}}

}
