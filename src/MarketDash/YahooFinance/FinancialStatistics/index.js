import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper, Select, MenuItem } from '@material-ui/core';
import { toast } from 'react-toastify';

/* Libraries */
import stockTickers from '../../../lib/stockTickers';

/* Components */
import IncomeHighlights from './components/IncomeHighlights';
import BalanceSheetHighlights from './components/BalanceSheetHighlights';
import CashFlowHighlights from './components/CashFlowHighlights';

/* Routes */
const alphaVantageRoutes = require('../../../routes/alphaVantageRoutes');
const yahooFinanceRoutes = require('../../../routes/yahooFinanceRoutes');

class FinancialStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiFinished: false,
      stockTicker: 'AAPL',
      statsObject: {}, 
      stockData: {},
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    Promise.all([
      yahooFinanceRoutes.getFinancialStatistics(e.target.value),
      alphaVantageRoutes.getDailyPriceQuote(e.target.value),
    ])
      .then(result => {
        if (result === 'Cannot call api any longer') {
          toast.info(result);
        }
        else {
          this.setState({
            stockTicker: e.target.value,
            statsObject: result[0],
            stockData: result[1],
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    const { stockTicker } = this.state;

    Promise.all([
      yahooFinanceRoutes.getFinancialStatistics(stockTicker),
      alphaVantageRoutes.getDailyPriceQuote(stockTicker),
    ])
      .then(result => {
        this.setState({
          apiFinished: true,
          statsObject: result[0],
          stockData: result[1],
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { apiFinished, stockTicker, statsObject, stockData } = this.state;
    if (!apiFinished) {
      return (
        <div style={{paddingTop: '100px'}}>
          <div className="sk-plane sk-center"></div><h4 style={{textAlign: 'center'}}>Please wait...</h4>
        </div>
      )
    }

    console.log(this.state);
    return (
      <div>
        <Grid container className="row-mimic" spacing={2}>
          <Grid item xs={3}>
            <Paper style={{padding: '10px'}}>
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
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{padding: '10px'}}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <b>{stockData['Daily Array'][stockData['Daily Array'].length - 1].close}</b>
                </Grid>
                <Grid item xs={12}>
                  <small>Price as of {stockData['Daily Array'][stockData['Daily Array'].length - 1].date}</small>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{padding: '10px'}}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <b>{stockData['Metrics']['Highest Price'].value}</b>
                </Grid>
                <Grid item xs={12}>
                  <small>Recent High on {stockData['Metrics']['Highest Price'].date}</small>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{padding: '10px'}}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <b>{stockData['Metrics']['Lowest Price'].value}</b>
                </Grid>
                <Grid item xs={12}>
                  <small>Recent Low on {stockData['Metrics']['Lowest Price'].date}</small>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container className="row-mimic" spacing={2}>
          <Grid item xs={6}>
            <IncomeHighlights
              statsObject={statsObject}
            />
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <BalanceSheetHighlights
                statsObject={statsObject}
              />
            </Grid>
            <Grid item xs={12}>
              <CashFlowHighlights
                statsObject={statsObject}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default FinancialStatistics;