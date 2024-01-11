import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,  
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  dataLabels: ApexDataLabels | any;
  colors: string[] | any;
  stroke: ApexStroke | any;
};

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.css']
})
export class CardStatisticComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [34, 12, 41, 22, 15],
      chart: {
        width: 300,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
        stroke: {
          width: 0,
        },
      fill: {
        type: "solid"
      },
      legend: {
        position: "bottom",
        show:false
      },
      colors:['#1EAAE7', '#6418C3', '#2BC155', '#FF7A30', '#FFEF5F'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom",
			  show:false
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
