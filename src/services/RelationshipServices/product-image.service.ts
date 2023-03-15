import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Image} from "../../models/image.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }


  GetAllImagesByProduct(id):Observable<Image[]> {
    return this.http.get<Image[]>(
      endPoints.getAllImagesByProduct + id
    );
  }

  AttachImageToProduct(parent,child) {
    return this.http.post(
      endPoints.attachImageToProduct + "parent="+parent + "&child=" + child,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }

  
  DetachImageFromProduct(parent,child) {
    return this.http.post(
      endPoints.detachImageFromProduct +"parent="+parent + "&child=" + child,
      null,
      {headers:this.headersreq}
    ).subscribe();
  }
}
