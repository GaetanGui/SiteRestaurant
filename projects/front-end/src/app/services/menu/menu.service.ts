import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../menu/types/category.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'https://localhost:7123/api/'; 

  constructor(private http: HttpClient) { }

  /**
   * Récupère toutes les catégories AVEC leurs plats
   */
  getMenu(): Observable<Category[]> {
    var endPoint = 'Categories/dishes'

    return this.http.get<Category[]>(this.apiUrl + endPoint);
  }
}
