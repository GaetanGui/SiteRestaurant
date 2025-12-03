import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpeningHour } from '../../home/types/openingHours.model';

@Injectable({
  providedIn: 'root'
})
export class OpeningHoursService {
  private apiUrl = 'https://localhost:7123/api/';

  constructor(private http: HttpClient) { }

    /**
     * Récupère toutes les opening hours
     */
    getOpeningHours(): Observable<OpeningHour[]> {
      var endPoint = 'OpeningHours'
      
      return this.http.get<OpeningHour[]>(this.apiUrl + endPoint);
    }
}
