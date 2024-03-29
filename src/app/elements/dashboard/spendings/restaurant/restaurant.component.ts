import { Component, OnInit, ViewChild } from '@angular/core';

import {ChartComponent, ApexNonAxisChartSeries, ApexPlotOptions, ApexChart,  ApexFill, ApexStroke,  ApexResponsive } from "ng-apexcharts";

 
export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
  responsive: ApexResponsive[] | any;
};



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

      constructor() {
        this.chartOptions = {
          series: [5],
          chart: {
            height: 140,
            type: "radialBar",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false
            }
          },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '65%',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 10,
                    opacity: 0.1
                  }
                },
                track: {
                  background: '#eaeaea',
                  strokeWidth: '100%',
                  margin: 0, // margin is in pixels
                },
            
                dataLabels: {
                  show: true,
                  value: {
                    offsetY:-7,
                    color: '#000',
                    fontSize: '16px',
                    show: true,
                  }
                }
              }
            },
            fill: {
                colors: ['#1eaae7'],
            },
            stroke: {
            },
            labels: [''],
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                        height: 120,
                    }
                }
            }]
        };
      }

  ngOnInit(): void {
  }

}
