import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import endPoints from '../endpoints';
import { Category } from 'src/models/category.model';
import { Subcategory } from 'src/models/subcategory.model';
import { Subsubcategory } from 'src/models/subsubcategory.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>(
      endPoints.getAllCategories
    );
  }

  getAllSubcategories():Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(
      endPoints.getAllSubCategories
    );
  }

  getAllSubsubcategories():Observable<Subsubcategory[]> {
    return this.http.get<Subsubcategory[]>(
      endPoints.getAllSubsubCategories
    );
  }

  attachSubToCat(cat,sub){
    return this.http.post(
      endPoints.attachsubtocat + "parent="+cat + "&child=" + sub,
      null
    ).subscribe();
  }

  attachSubsubToSub(sub,subsub){
    return this.http.post(
      endPoints.attachsubtocat + "parent="+sub + "&child=" + subsub,
      null
    ).subscribe();
  }
}
