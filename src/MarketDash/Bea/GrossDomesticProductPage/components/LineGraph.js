import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* Library */
import recessions from '../../../../lib/recessions';

const LineGraph = (props) => {
  const {
    gdpData,
  } = props;

  let xAxis = gdpData.map(a => a['TimePeriod']);
  const options = {
    chart: {
      style: {
        fontFamily: "Roboto, Arial, Helvetica, sans-serif"
      }
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: xAxis,
      plotBands: recessions.recessionPlotBands(xAxis),
    },
    yAxis: {
      title: {
        text: 'GDP (millions)'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    series: [{
      name: 'GDP',
      data: gdpData.map(a => a['DataValue']),
    }],
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