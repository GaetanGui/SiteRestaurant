import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeFeature } from '../../home/types/homeFeature.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'https://localhost:7123/api/';

  constructor(private http: HttpClient) { }

    /**
     * Récupère toutes les home features
     */
    getHomeFeature(): Observable<HomeFeature[]> {
      var endPoint = 'HomeFeature'
      
      return this.http.get<HomeFeature[]>(this.apiUrl + endPoint);
    }

}
