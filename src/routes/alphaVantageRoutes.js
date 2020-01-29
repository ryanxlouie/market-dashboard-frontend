import axios from 'axios';

const { ipAddress } = require('../lib/config');

export async function getDailyPriceQuote(ticker) {
  let result = (await axios.get(`${ipAddress}/alphaVantageRoutes/DailyPriceQuote/${ticker}`)).data.data;

  return(result);
}

export async function getIndustryPerformance() {
  let result = (await axios.get(`${ipAddress}/alphaVantageRoutes/IndustryPerformance`)).data.data;

  return(result);
}