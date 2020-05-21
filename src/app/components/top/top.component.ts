import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Country } from 'src/app/interfaces/country';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  displayedColumns$: string[] = ['position', 'country', 'total cases', 'total deaths', 'total recovered'];
  countries$ = new MatTableDataSource<Country>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( 
    public _covidService:CovidService,
    private _snakcBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this._covidService.getSummaryDataListener().subscribe(data => {
      this.countries$ = data.Countries;
      this._covidService.spinner$ = false;
      this.countries$.sort = this.sort;
      this.countries$.paginator = this.paginator;
    });
  }
}