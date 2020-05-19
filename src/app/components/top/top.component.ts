import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from 'src/app/interfaces/country';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  displayedColumns: string[] = ['position', 'country', 'total cases', 'total deaths', 'total recovered'];
  spinner:boolean = true;
  
  public countries$:any[]=[];

  constructor( 
    public _covidService:CovidService,
    private _snakcBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this._covidService.getSummaryDataListener().subscribe(data => {
      console.log(data.Countries);
      this.countries$ = data.Countries;
      this.spinner = false;
    },
    (error) => {
      this._snakcBar.open(error.message, 'Close');
      this.spinner = false;
    });
  }

}