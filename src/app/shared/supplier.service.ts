import { Injectable } from '@angular/core';
import { SUPPLIER } from './supplier.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  formData : SUPPLIER;
  list : SUPPLIER[];
  readonly rootURL ="https://localhost:44377/api"

  constructor(public http : HttpClient) { }

  postSupplier(formData: SUPPLIER){
    return this.http.post(this.rootURL+'/supplier/create' ,formData);
  }

  GetProducts(){
    return this.http.get('https://localhost:44377/api/supplier/GetProducts');
  }
  refreshList(): Observable<SUPPLIER[]> {
    return this.http.get<SUPPLIER[]>(environment.loginURL+'/api/GetAll')
  }

  putSupplier(formData: SUPPLIER) : Observable<SUPPLIER> {
    return this.http.put<SUPPLIER> ('https://localhost:44377/apisupplier/update/'+ formData.SUPPLIER_ID ,formData);
  }

  deleteSupplier(id : number){
    return this.http.delete(this.rootURL+'/supplier/delete/'+ id);
  }
}
