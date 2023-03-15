import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from 'src/models/brand.model';
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  getAllBrands():Observable<Brand[]> {
    return this.http.get<Brand[]>(
      endPoints.getAllBrands
    );
  }

  InsertBrand(formData) {
    return this.http.post(
      endPoints.insertBrand,
      formData,
      {headers:this.headersreq}
    ).subscribe();
    }

    DeleteBrand(id) {
      return this.http.delete(
        endPoints.deleteBrand+id,
        {headers:this.headersreq}
      );
  }



}
