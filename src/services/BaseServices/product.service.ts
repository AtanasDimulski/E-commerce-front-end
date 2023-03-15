import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../../models/product.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(
      endPoints.getAllProducts
    );
  }

  InsertProduct(formData) {
    return this.http.post(
      endPoints.insertProduct,
      formData,
      {headers:this.headersreq}
    );
    }

    GetProductById(id):Observable<Product>{
      return this.http.get<Product>(
        endPoints.getByIdProduct + id
      )
    }

    DeleteProduct(id) {
      return this.http.delete(
        endPoints.deleteProduct+id,
        {headers:this.headersreq}
      );
  }
}
