import React, { Component } from "react";
import ReactApexCharts from 'react-apexcharts';
import '../../scss/app.scss';

class LineGraphic extends Component {
    constructor(props) {
      super(props);          
      this.state = {    
        series: [{
          name: 'Sales',
          data: [
            {
              x: 1,
              y: 2
            },
            {
              x: 11,
              y: 11
            },
            {
              x: 20.5,
              y: 7
            },
            {
              x: 30,
              y: 8
            },
            {
              x: 39,
              y: 9
            },
            {
              x: 51,
              y: 5
            },
            {
              x: 61,
              y: 11
            },
            {
              x: 69,
              y: 5
            }
          ]
        }],
        options: {
          chart: {
            height: 161,
            type: 'line',
          },
          stroke: {
            width: 5
          },
          xaxis: {
            type: 'numeric',
            categories: [0, 10, 20, 30, 40, 50, 60]
          },
          title: {
            text: 'Score',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#35fde9'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1
              //stops: [0, 50, 100]
            },
          },
          yaxis: {
            min: 0,
            max: 16
          }
        },
      
      
      };
    }
    render() {
        return (
            <div id="chart" className='chart-background'>
                <ReactApexCharts options={this.state.options} series={this.state.series} type="line" height={230} />
            </div>
        );
    }
  }

export default LineGraphic;