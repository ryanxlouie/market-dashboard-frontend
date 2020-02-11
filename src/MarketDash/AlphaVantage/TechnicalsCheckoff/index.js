import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper, Select, MenuItem } from '@material-ui/core';
import { toast } from 'react-toastify';

/* Libraries */
import stockTickers from '../../../lib/stockTickers';

/* Components */
import LineGraph from './components/LineGraph';
import IndicatorsList from './components/IndicatorsList';

/* Routes */
const alphaVantageRoutes = require('../../../routes/alphaVantageRoutes');

class TechnicalsCheckoff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiFinished: false,
      stockTicker: 'AAPL',
      stockData: {},
      chosenIndex: 0,
      indicatorsObject: {
        sma: false,
        rsi: false,
      },
      smaArray: [],
      rsiArray: [],
    };

    this.handleGraphClick = this.handleGraphClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleGraphClick(e) {
    this.setState({
      chosenIndex: e.point.index,
    });
  }

  handleSelect(e) {
    alphaVantageRoutes.getDailyPriceQuote(e.target.value)
      .then(result => {
        if (result === 'Cannot call api any longer') {
          toast.info(result);
        }
        else {
          this.setState({
            stockTicker: e.target.value,
            stockData: result,
            chosenIndex: 0,
            indicatorsObject: {
              sma: false,
              rsi: false,
            },
            smaArray: [],
            rsiArray: [],
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleCheckbox(name, event) {
    const { stockTicker, stockData, indicatorsObject, smaArray, rsiArray } = this.state;
    let newIndicatorsObject = indicatorsObject;
    newIndicatorsObject[name] = event.target.checked;

    if (name === 'sma') {
      if (event.target.checked === true && smaArray.length === 0) {
        alphaVantageRoutes.getSimpleMovingAverage(stockTicker)
          .then(result => {
            let smaArray = stockData['Daily Array'].map(x => ({date: x.date}));
            smaArray.forEach(item => {
              let tempDate = new Date(item.date);
              let temp = result['Technical Analysis: SMA'][`${tempDate.getFullYear()}-${(tempDate.getMonth()+1 < 10) ? `0${tempDate.getMonth()+1}` : tempDate.getMonth()+1}-${(tempDate.getDate() < 10) ? `0${tempDate.getDate()}` : tempDate.getDate()}`];
              item['Simple Moving Average'] = (temp !== undefined) ? temp['SMA'] : null;
            });
    
            this.setState({
              indicatorsObject: newIndicatorsObject,
              smaArray: smaArray,
            });
          })
          .catch(error => {
            console.log(error);
          })
      }
      else {
        this.setState({
          indicatorsObject: newIndicatorsObject,
        })
      }
    }
    else if (name === 'rsi') {
      if (event.target.checked === true && rsiArray.length === 0) {
        alphaVantageRoutes.getRelativeStrengthIndex(stockTicker)
          .then(result => {
            let rsiArray = stockData['Daily Array'].map(x => ({date: x.date}));
            rsiArray.forEach(item => {
              let tempDate = new Date(item.date);
              let temp = result['Technical Analysis: RSI'][`${tempDate.getFullYear()}-${(tempDate.getMonth()+1 < 10) ? `0${tempDate.getMonth()+1}` : tempDate.getMonth()+1}-${(tempDate.getDate() < 10) ? `0${tempDate.getDate()}` : tempDate.getDate()}`];
              item['Relative Strength Index'] = (temp !== undefined) ? temp['RSI'] : null;
            });
    
            this.setState({
              indicatorsObject: newIndicatorsObject,
              rsiArray: rsiArray,
            });
          })
          .catch(error => {
            console.log(error);
          })
      }
      else {
        this.setState({
          indicatorsObject: newIndicatorsObject,
        })
      }
    }
  }

  componentDidMount() {
    const { stockTicker } = this.state;

    alphaVantageRoutes.getDailyPriceQuote(stockTicker)
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

  render() {
    const { apiFinished, stockTicker, stockData, chosenIndex, indicatorsObject, smaArray, rsiArray } = this.state;
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
                indicatorsObject={indicatorsObject}
                smaArray={smaArray}
                rsiArray={rsiArray}
                handleGraphClick={this.handleGraphClick}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container className="row-mimic">
          <Grid item xs={3}>
            <IndicatorsList
              indicatorsObject={indicatorsObject}
              handleCheckbox={this.handleCheckbox}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default TechnicalsCheckoff;