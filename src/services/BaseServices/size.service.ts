import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Size} from "../../models/size.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class SizeService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  getAllSizes():Observable<Size[]> {
    return this.http.get<Size[]>(
      endPoints.getAllSizes
    );
  }

  InsertSize(formData) {
    return this.http.post(
      endPoints.insertSize,
      formData,
      {headers:this.headersreq}
    ).subscribe();
    }

    DeleteSize(id) {
      return this.http.delete(
        endPoints.deleteSize+id,
        {headers:this.headersreq}
      );
  }
  
}
