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
  selector: 'app-wallet-investment',
  templateUrl: './wallet-investment.component.html',
  styleUrls: ['./wallet-investment.component.css']
})
export class WalletInvestmentComponent implements OnInit {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

      constructor() {
        this.chartOptions = {
          series: [74],
          chart: {
            height: 80,
			width:80,
            type: "radialBar",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false
            },
			sparkline: {
				enabled: true
			}
          },
            plotOptions: {
              radialBar: {
                 hollow: {
                    margin: 0,
                    size: '50%',
                    background: "#fff",
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.1
					}
                },
                track: {
                  background: '#e3f9e9',
                  strokeWidth: '70%',
                  margin: 0, // margin is in pixels
                },
            
                dataLabels: {
                  show: true,
                  value: {
                    offsetY:-10,
                    color: '#2BC155',
                    fontSize: '14px',
                    show: true,
                  }
                }
              }
            },
            fill: {
                colors: ['#29bc53'],
            },
            stroke: {
            },
            labels: [''],
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                       height: 80,
						width:80
                    }
                }
            }]
        };
      }

  ngOnInit(): void {
  }

}
