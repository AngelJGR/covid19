import { Component, OnInit } from '@angular/core';
import * as CamvasJS from '../../../assets/js/canvasjs.min';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  options = {
    animationEnabled: true,
    exportEnabled: true,
    data: [{
      name: "Confirmed",
      showInLegend: true,
      legendMarkerType: "square",
      type: "area",
      color: "rgba(0,75,141,0.7)",
      markerSize: 0,
      dataPoints: [
        { y: 71, label: "Apple" },
        { y: 55, label: "Mango" },
        { y: 50, label: "Orange" },
        { y: 65, label: "Banana" },
        { y: 95, label: "Pineapple" },
        { y: 68, label: "Pears" },
        { y: 28, label: "Grapes" },
        { y: 34, label: "Lychee" },
        { y: 14, label: "Jackfruit" }
      ]
    },
    {
      name: "Deaths",
      showInLegend: true,
      legendMarkerType: "circle",
      type: "area",
      color: "rgba(40,175,101,0.6)",
      markerSize: 0,
      dataPoints: [
        { y: 61, label: "Apple" },
        { y: 45, label: "Mango" },
        { y: 40, label: "Orange" },
        { y: 55, label: "Banana" },
        { y: 85, label: "Pineapple" },
        { y: 58, label: "Pears" },
        { y: 18, label: "Grapes" },
        { y: 24, label: "Lychee" },
        { y: 4, label: "Jackfruit" }
      ]
    }]
  }
  ngOnInit(): void {
    let chart = new CamvasJS.Chart("chartContainer", this.options);
    let chart2 = new CamvasJS.Chart("chartContainer2", this.options);
    chart.render();
    chart2.render();
  }

}
