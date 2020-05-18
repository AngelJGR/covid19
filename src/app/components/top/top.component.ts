import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  summary;
  spinner:boolean = true;
  
  public countries$:any[]=[];


  constructor(   public _covidService:CovidService,
    private _snakcBar:MatSnackBar) { }

  ngOnInit(): void {
    // this.countries$ = this._dataService.countries$;
    this._covidService.getSummaryDataListener().subscribe(data => {
      console.log(data.Countries);
      this.summary = data;
      this.countries$ = data.Countries
      // this._dataService.countries$ = data.Countries;
      this.spinner = false;
    },
    (error) => {
      this._snakcBar.open(error.message, 'Close');
      this.spinner = false;
    });
  }

}