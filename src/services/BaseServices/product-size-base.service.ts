import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../../models/product.model";
import endPoints from '../endpoints';
import { Productsize } from 'src/models/productsize.model';
@Injectable({
  providedIn: 'root'
})
export class ProductSizeBaseService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  GetAllProductSizes():Observable<Productsize[]>{
    return this.http.get<Productsize[]>(
      endPoints.getAllProductSizes
    )
  }
  InsertProductSize(formData) {
    return this.http.post(
      endPoints.insertProductSize,
      formData,
      {headers:this.headersreq}
    ).subscribe();
    }

    DeleteProductSize(id) {
      return this.http.delete(
        endPoints.deleteProductSize+id,
        {headers:this.headersreq}
      );
  }
}
