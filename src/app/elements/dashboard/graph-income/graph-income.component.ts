import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  fill: ApexFill | any;
  };

@Component({
  selector: 'app-graph-income',
  templateUrl: './graph-income.component.html',
  styleUrls: ['./graph-income.component.css']
})
export class GraphIncomeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales Stats",
          data: [10,15,11,16,13,19,8,14,10,20,15,17,9,16]
        }
      ],
      chart: {
        height: 80,
        type: "area",
        zoom: {
          enabled: false
        },
		sparkline:{
			enabled: true,
		}
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
		width: 5,
		colors:['#1EAAE7'],
        curve: "smooth"
      },
	  fill: {
        opacity: 0,
        type: "solid",
        
      },
      
      grid: {
         show: false,
      },
      xaxis: {
          labels: {
          show: false,
        }, 
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        categories: [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"
        ]
      },
       yaxis: {
        show: false,
       },
    };
  }

  ngOnInit(): void {
  }

}
