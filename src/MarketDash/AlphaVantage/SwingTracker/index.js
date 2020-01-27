import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper, Select, MenuItem } from '@material-ui/core';
import { toast } from 'react-toastify';

/* Routes */
import avRoutes from '../../../routes/AlphaVantageRoutes';

/* Libraries */
import stockTickers from '../../../lib/stockTickers';

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
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(e) {
    avRoutes.getDailyStockData(true, e.target.value, 'compact')
      .then(result => {
        if (result === 'Cannot call api any longer') {
          toast.info(result);
        }
        else {
          this.setState({
            stockTicker: e.target.value,
            stockData: result,
            chosenIndex: 0,
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
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
              <Grid item xs={12}>
                <Select 
                  style={{minWidth: '120px', marginLeft: '15px'}}
                  value={stockTicker}
                  onChange={this.handleSelect}
                >
                  {stockTickers.map((stock, index) => (
                    <MenuItem 
                      value={stock.ticker}
                      key={index}
                    >
                      {stock.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
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