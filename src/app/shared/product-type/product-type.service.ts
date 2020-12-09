import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductType } from './product-type.model';
import { Productcategory } from 'src/app/shared/productcategory/productcategory.model';


@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  formData: ProductType;
  list : ProductType[];

  constructor(private http : HttpClient) { }

  getProductTypeList(id) 
  {
    return this.http.get('https://localhost:44377/api/Tree/GetProductTypes?id=' + id);
  }

  getProductCategory(): Observable<Productcategory[]>{
    return this.http.get<Productcategory[]>(environment.loginURL+ '/api/ProductCategory');
  }

  // getData(): Observable<Producttype[]>{
  //   return this.http.get<Producttype[]>(environment.apiUrl + '/ProductType');
  // }

  getProductType () : Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://localhost:44377/api/ProductType');
  }

  
  postProducttype(formData: ProductType){
    return this.http.post(environment.loginURL+'/api/ProductType',formData);
  }

  refreshList(){
    this.http.get(environment.loginURL+'/api/ProductType')
    .toPromise().then(res => this.list = res as ProductType[]);
  }

  putProducttype(formData: ProductType): Observable<ProductType>{
    return this.http.put<ProductType>(environment.loginURL+'/api/ProductType/update/'+formData.PRODUCT_TYPE_ID,formData);
  }

  deleteProducttype(id : number){
    return this.http.delete(environment.loginURL+'/api/ProductType/'+id);
  }
}
