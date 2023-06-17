import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchedDataService {

  private apiUrl = 'http://localhost:8080/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    const url = `${this.apiUrl}/${city}`;
    return this.http.get<WeatherData>(url);
  }
  
   
}
export interface WeatherData {
  City: string;
  Condition:string;
  Humidity: number;
  Pressure: number;
  Temperature: number;
  
}