import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../../models/product.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class ProductBrandService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }


  GetAllProductsByBrand(id):Observable<Product[]> {
    return this.http.get<Product[]>(
      endPoints.getAllProductsByBrand+id
    );
  }

  AttachProductToBrand(parent,child) {
    return this.http.post(
      endPoints.attachProductToBrand + "parent="+parent + "&child=" + child,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }

  
  DetachProductFromBrand(parent,child) {
    return this.http.post(
      endPoints.detachProductFromBrand+"parent="+parent + "&child=" + child,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }

}
