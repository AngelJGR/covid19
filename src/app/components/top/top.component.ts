import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Country } from 'src/app/interfaces/country';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  displayedColumns$: string[] = ['position', 'country', 'total cases', 'total deaths', '% deaths', 'total recovered', '% recovered'];
  countries$;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    public _covidService:CovidService
  ) { }

  ngOnInit(): void {
    this._covidService.getSummaryDataListener().pipe(
      map(data => {
        this.countries$ = new MatTableDataSource<Country>();
        this.countries$.data =data.Countries.sort((a,b) => {
          if (a.TotalConfirmed < b.TotalConfirmed) return 1;
          if (a.TotalConfirmed > b.TotalConfirmed) return -1;
          return 0;
        });
        this._covidService.spinner$ = false;
        this.countries$.sort = this.sort;
        this.countries$.paginator = this.paginator;
      })
    ).subscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.countries$.filter = filterValue;
  }
}