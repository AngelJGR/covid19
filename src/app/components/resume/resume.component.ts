import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  summary;
  
  constructor( 
    public _covidService:CovidService,
    private _snakcBar:MatSnackBar
  ) { }
  
  ngOnInit() {
    this._covidService.getSummary();
    // this._covidService.spinner$ = false;
    this._covidService.getSummaryDataListener()
    .subscribe(data => {
      this.summary = data;
      this._covidService.spinner$ = false;
    },
    (error) => {
      this._snakcBar.open(error.message, 'Close');
      this._covidService.spinner$ = false;
    });
  }
}
