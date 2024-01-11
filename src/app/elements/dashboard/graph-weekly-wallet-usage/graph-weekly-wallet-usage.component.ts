import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill,
  ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  colors: string[] | any;
  fill: ApexFill | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-graph-weekly-wallet-usage',
  templateUrl: './graph-weekly-wallet-usage.component.html',
  styleUrls: ['./graph-weekly-wallet-usage.component.css']
})
export class GraphWeeklyWalletUsageComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales Stats",
          data: [10,20,15,25,10,20,12,24,10,26,8,18,13,28,10,20],
        },
      ],
      chart: {
        height: 100,
        type: "area",
        sparkline: {
            enabled: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      colors: ["#70c9f0"],
      grid: {
          show: false,
      },
      fill: {
        opacity: 1,
        type: "solid",
        
      },
      xaxis: {
        labels: {
          show: false,
        }
      },
       yaxis: {
        show: false,
       },
      tooltip: {
        enabled: false,
      }
    };
  }

  ngOnInit(): void {
  }

}
