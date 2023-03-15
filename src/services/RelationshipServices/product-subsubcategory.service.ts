import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../../models/product.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class ProductSubsubcategoryService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  GetAllProductsBySubsubcategory(id):Observable<Product[]> {
    return this.http.get<Product[]>(
      endPoints.getAllProductsBySubsubcategory+id
    );
  }

  AttachProductToSubsubcategory(parent,child) {
    return this.http.post(
      endPoints.attachProductToSubsubcategory + "parent="+parent + "&child=" + child,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }

  
  DetachProductFromSubsubcategory(parent,child) {
    return this.http.post(
      endPoints.detachProductFromSubsubcategory + "parent="+parent + "&child=" + child,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }
}
