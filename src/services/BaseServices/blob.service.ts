import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import endPoints from '../endpoints';
import {Image} from "../../models/image.model";
@Injectable({
  providedIn: 'root'
})
export class BlobService {

  headersreq = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http: HttpClient) { }

  UploadImage(formData) {
    return this.http.post(
      endPoints.uploadImage,
      formData,
      {headers:this.headersreq}
    ).subscribe();
    }

    GetBlobImageByName(name){
      return this.http.get(
        endPoints.getImageByNameBlob + name,
        {responseType: 'text'}
      )
    }

    DeleteImage(name) {
      return this.http.delete(
        endPoints.deleteImageBlob+name,
        {headers:this.headersreq}
      );
  }
}
