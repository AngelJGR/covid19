import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  summary$:any;
  eventMessage:string = "covid data";
  errorData:string = "";
  constructor( 
    public _covidService:CovidService,
    private _snakcBar:MatSnackBar
  ) { }
  
  ngOnInit() {
    this._covidService.listen(this.eventMessage).subscribe((data:any) => {
      if (data.ok) {
        this.summary$ = data;
      } else {
        this.errorData = `Error ${data.status}: ${data.statusText}`;
        this._snakcBar.open(this.errorData, 'Close', {
          duration: 6000
        });
      }
      this._covidService.spinner$ = false;
    });

  }
}
