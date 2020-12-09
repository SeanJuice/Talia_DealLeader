import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductCategory } from './product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http : HttpClient) { }

  getProductCategoryList() : Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(environment.loginURL+'/api/Tree/GetProductCategories');
  }
}
