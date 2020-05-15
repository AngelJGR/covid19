import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  public countries$:Observable<any[]>;

  constructor( public _dataService:DataService ) { }

  ngOnInit(): void {
    this.countries$ = this._dataService.countries$;
  }

}
