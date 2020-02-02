import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineGraph = (props) => {
  const {
    stockData,
    indicatorsObject,
    smaArray,
    rsiArray,
    handleGraphClick,
  } = props;

  let xAxis = stockData.map(a => a['date']);
  let yAxis = [
    {
      title: {
        text: 'Open Value'
      }
    },
  ];
  let series = [{
    name: 'Open Price',
    data: stockData.map(a => a['open']),
    color: '#1976d2',
    marker: {
      symbol: 'circle'
    },
    yAxis: 0,
  }];

  if (indicatorsObject.sma === true && smaArray.length !== 0) {
    series.push({
      name: 'SMA - 15 day',
      data: smaArray.map(a => parseFloat(a['Simple Moving Average'])),
      color: '#66bb6a',
      marker: {
        symbol: 'triangle'
      },
      yAxis: 0,
    })
  }

  if (indicatorsObject.rsi === true && rsiArray.length !== 0) {
    series.push({
      name: 'RSI',
      data: rsiArray.map(a => parseFloat(a['Relative Strength Index'])),
      color: '#dc004e',
      marker: {
        symbol: 'diamond'
      },
      yAxis: 1,
    });
    yAxis.push({
      title: {
        text: 'RSI Value'
      },
      opposite: true,
    });
  }

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
    yAxis: yAxis,
    // yAxis: {
    //   title: {
    //     text: 'Open Value'
    //   }
    // },
    series: series,
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
        connectNulls: true,
      },
    },
    credits: {
      enabled: false,
    },
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