import { Injectable } from '@angular/core';
import { Productcategory } from './productcategory.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  formData : Productcategory;
 list : Productcategory[];

  constructor(public http : HttpClient) { }

  getProductCategory(): Observable<Productcategory[]>{
    return this.http.get<Productcategory[]>(environment.loginURL + '/api/ProductCategory');
  }

  getLastId(){
    return this.list[this.list.length].PRODUCT_CATEGORY_ID;
   }
 

  postProductCategory(formData: Productcategory){
    return this.http.post(environment.loginURL+'/api/ProductCategory',formData);
  }

  refreshList(){
    return this.http.get(environment.loginURL + '/api/ProductCategory');
    // this.http.get(environment.loginURL+'/ProductCategory').toPromise().then(res => this.list = res as Productcategory[]);
  }


  putProductCategory(formData: Productcategory): Observable<Productcategory>{
    return this.http.put<Productcategory>(environment.loginURL+'/api/ProductCategory/update/'+formData.PRODUCT_CATEGORY_ID,formData);
    
  }

  deleteProductCategory(id : number){
    return this.http.delete(environment.loginURL+'/api/ProductCategory/'+id);
  }
}
