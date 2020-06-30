import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  
  api_url:string = '/';
  public spinner$:boolean = true;
  public errorMessage$:string = "";
  socket:any;
  path = "/";

  
  constructor(
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
  
}