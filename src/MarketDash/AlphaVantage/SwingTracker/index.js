import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper } from '@material-ui/core';

/* Routes */
import avRoutes from '../../../routes/AlphaVantageRoutes';

/* Components */
import LineGraph from './components/LineGraph';
import ChosenDateCard from './components/ChosenDateCard';
import MaxGainCard from './components/MaxGainCard';
import MaxLossCard from './components/MaxLossCard';

class SwingTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiFinished: false,
      stockTicker: 'AAPL',
      stockData: [],
      chosenIndex: 0,
    }

    this.handleGraphClick = this.handleGraphClick.bind(this);
  }

  componentDidMount() {
    const { stockTicker } = this.state;

    avRoutes.getDailyStockData(false, stockTicker, 'compact')
      .then(result => {
        this.setState({
          apiFinished: true,
          stockData: result,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleGraphClick(e) {
    this.setState({
      chosenIndex: e.point.index,
    });
  }

  render() {
    const { apiFinished, stockTicker, stockData, chosenIndex } = this.state;
    if (!apiFinished) {
      return (<div></div>)
    }

    console.log(this.state);
    return (
      <div>
        <Grid container className="row-mimic">
          <Grid item xs={12}>
            <Paper style={{padding: '10px'}}>
              <h4 style={{margin: '0px'}}>
                {stockTicker} Open Data
              </h4>
              <LineGraph
                stockData={stockData['Daily Array']}
                handleGraphClick={this.handleGraphClick}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container className="row-mimic" spacing={2}>
          <Grid item xs={3}>
            <ChosenDateCard
              chosenDate={stockData['Daily Array'][chosenIndex].date}
            />
          </Grid>
          <Grid item xs={4}>
            <MaxGainCard
              dailyArray={stockData['Daily Array']}
              chosenIndex={chosenIndex}
            />
          </Grid>
          <Grid item xs={4}>
            <MaxLossCard
              dailyArray={stockData['Daily Array']}
              chosenIndex={chosenIndex}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SwingTracker;