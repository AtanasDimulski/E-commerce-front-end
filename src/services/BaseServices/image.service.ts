import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Image} from "../../models/image.model";
import endPoints from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  getAllImages():Observable<Image[]>{
    return this.http.get<Image[]>(
      endPoints.getAllImages
    );
  }

  InsertImage(formData) {
    return this.http.post(
      endPoints.insertImage,
      formData,
      {headers:this.headersreq}
    ).subscribe();
    }

    GetImageByName(name):Observable<Image>{
      return this.http.get<Image>(
        endPoints.getByNameImage + name
      );
    }

    DeleteImage(id) {
      return this.http.delete(
        endPoints.deleteImage+id,
        {headers:this.headersreq}
      );
  }
}
