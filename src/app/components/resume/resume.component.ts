import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CovidService } from 'src/app/services/covid.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  summary;
  spinner:boolean = true;
  
  constructor( 
    public _covidService:CovidService,
    private _snakcBar:MatSnackBar
  ) { }
  
  ngOnInit() {
    this._covidService.getSummary();
    this._covidService.getSummaryDataListener()
    .subscribe(data => {
      console.log(data);
      this.summary = data;
      // this._dataService.countries$ = data.Countries;
      this.spinner = false;
    },
    (error) => {
      this._snakcBar.open(error.message, 'Close');
      this.spinner = false;
    });
  }
}
