import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Event} from 'src/app/shared/Tina/event.model';
import {catchError, map } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData : Product;
  list : Product[];

  constructor(private http : HttpClient) { }

  getProductList(id : number) 
  {
    return this.http.get('https://localhost:44377/api/Tree/GetProduct?id=' + id);
  }

  CreateProduct(formData: Product): Observable<Product> {
    return this.http.post<Product>("https://localhost:44377/api/Product", formData);
  }

  get(): Observable<Product[]>{  
    return this.http.get<Product[]>("https://localhost:44377/api/Product");
    }

  getProductTypes(): Observable<any> {  
      return this.http.get("https://localhost:44377/api/Producttype");
      }


  GetProduct(id: any) {
    return this.http.get("https://localhost:44377/api/Product/" + id ).pipe(map((res: any) => {
        console.log(res);
        return res;
    }));
  }

  UpdateProduct(formData : Product): Observable<Product> {
    return this.http.put<Product>("https://localhost:44377/api/Product/update/"+ formData.PRODUCT_ID, formData);
  }


  DeleteProduct(id : number) {
    return this.http.delete("https://localhost:44377/api/Product/" + id);
  }
}
