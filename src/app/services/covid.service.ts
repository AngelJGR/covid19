import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  api_url:string = 'https://api.covid19api.com/summary';
  constructor(protected _http:HttpClient ) { }

  getSummary(): Observable<any>{
    return this._http.get<any>(this.api_url);
  }
}
