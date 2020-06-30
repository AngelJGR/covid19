import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, Observable, Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  
  // api_url:string = 'https://api.covid19api.com/summary';
  // private summaryData = new Subject<any>();
  // public spinner$:boolean = true;
  // public errorMessage$:string = "";
  // constructor( 
  //   protected _http:HttpClient,
  //   private _snakcBar:MatSnackBar
  // ) { }
  
  // getSummary(){
  //   this._http.get<any>(this.api_url)
  //   .subscribe((data) => {
  //     this.summaryData.next(data);
  //     this.spinner$ = false;
  //   },
  //   (error)=> {
  //     this.errorMessage$ = "Status: " + error.status + ". " + error.statusText;
  //     this.spinner$ = false;
  //     this._snakcBar.open(this.errorMessage$, 'Close');
  //   });
  // }
  
  // getSummaryDataListener() {
  //   return this.summaryData.asObservable();
  // }




  // api_url:string = 'http://localhost:8080/';
  api_url:string = '/';
  private summaryData = new Subject<any>();
  public spinner$:boolean = true;
  public errorMessage$:string = "";
  socket:any;
  path = "/";
  constructor(
    protected _http:HttpClient,
    private _snakcBar:MatSnackBar
  ) {
    this.socket = io(this.path);
  }

  listen(eventName:string) {
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data:any) => {
        Subscriber.next(data);
      });
    });
  }
  
  // getSummary(){
  //   this._http.get<any>(this.api_url)
  //   .subscribe((data) => {
  //     this.summaryData.next(data);
  //     this.spinner$ = false;
  //   },
  //   (error)=> {
  //     console.log(error);
  //     this.errorMessage$ = "Status: " + error.status + ". " + error.statusText;
  //     this.spinner$ = false;
  //     this._snakcBar.open(this.errorMessage$, 'Close');
  //   });
  // }
  
  // getSummaryDataListener() {
  //   return this.summaryData.asObservable();
  // }
}