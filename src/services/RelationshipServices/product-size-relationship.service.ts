import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../../models/product.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class ProductSizeRelationshipService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  GetAllProductSizesByProduct(productId):Observable<Product[]> {
    return this.http.get<Product[]>(
      endPoints.getAllProductSizesByProduct + productId
    );
  }

  AttachProductSizeToProductAndSize(sizeId,productId,productSizeId) {
    return this.http.post(
      endPoints.attachProductSizeToProductandSize + "size="+sizeId + "&product=" + productId + "&child=" + productSizeId,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }

  
  DetachProductSizeFromProductAndSize(sizeId,productId,productSizeId) {
    return this.http.post(
      endPoints.detachProductSizeFromProductandSize + "size="+sizeId + "&product=" + productId + "&child=" + productSizeId,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }
}
