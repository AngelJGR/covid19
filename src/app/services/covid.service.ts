import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  
  api_url:string = 'https://api.covid19api.com/summary';
  private summaryData = new Subject<any>()
  constructor(protected _http:HttpClient ) { }
  
  getSummary(){
    this._http.get<any>(this.api_url)
    .subscribe((data) => {
     console.log(data);
      this.summaryData.next(data)
    })
  }
  
  getSummaryDataListener() {
    return this.summaryData.asObservable()
  }
}