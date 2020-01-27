import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineGraph = (props) => {
  const {
    stockData,
    handleGraphClick,
  } = props;

  let xAxis = stockData.map(a => a['date']);
  const options = {
    chart: {
      style: {
        fontFamily: "Roboto, Arial, Helvetica, sans-serif"
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: '* Click a point to change the time frame',
      align: 'right'
    },
    xAxis: {
      categories: xAxis,
    },
    yAxis: {
      title: {
        text: 'Open Value'
      }
    },
    series: [{
      name: 'Open',
      data: stockData.map(a => a['open']),
    }],
    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => handleGraphClick(e)
          }
        },
        allowPointSelect: true,
        marker: {
          enabled: true,
          states: {
            select: {
              enabled: true,
            },
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    }
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default LineGraph;