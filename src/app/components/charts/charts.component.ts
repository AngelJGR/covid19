import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  LineChart = [];
  options = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  dataDeaths = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: "Confirmed",
        fill: false,
        borderColor: '#2576f0',
        data: [
          { x: 'January', y: 10 },
          { x: 'February', y: 6 },
          { x: 'March', y: 15 },
          { x: 'April', y: 2 },
          { x: 'May', y: 11 },
          { x: 'June', y: 14 },
          { x: 'July', y: 7 }
        ]
      },
      {
        label: "Deaths",
        fill: false,
        borderColor: 'rgb(250, 63, 123)',
        data: [
          { x: 'January', y: 2 },
          { x: 'February', y: 1 },
          { x: 'March', y: 5 },
          { x: 'April', y: 0 },
          { x: 'May', y: 1 },
          { x: 'June', y: 4 },
          { x: 'July', y: 2 }
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {

    this.LineChart = new Chart('deathChart',
      {
        type: 'line',
        data: this.dataDeaths,
        options: this.options
      }
    );
  }

}
