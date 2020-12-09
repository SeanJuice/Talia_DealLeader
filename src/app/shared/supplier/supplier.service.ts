import { Injectable } from '@angular/core';
import { SUPPLIER } from './supplier.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { environment } from 'src/environments/environment';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  formData : SUPPLIER;
  list : SUPPLIER[];

  constructor(public http : HttpClient) { }

  postSupplier(formData: SUPPLIER){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(environment.loginURL +'/api/create/Supplier',formData, { headers: reqHeader });
  }

  GetProducts(){
    return this.http.get('https://localhost:44377/api/supplier/GetProducts').toPromise();
  }

  refreshList(): Observable<SUPPLIER[]> {
    return this.http.get<SUPPLIER[]>(environment.loginURL+'/api/GetAll')
  }

  putSupplier(formData: SUPPLIER){
    return this.http.put('https://localhost:44377/api/supplier/update/'+ formData.SUPPLIER_ID, formData);
  }

  deleteSupplier(id : number){
    return this.http.delete(environment.loginURL +'/api/supplier/delete/'+id);
  }
}

