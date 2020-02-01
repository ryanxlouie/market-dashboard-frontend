import axios from 'axios';

const { ipAddress } = require('../lib/config');

export async function getFinancialStatistics(ticker) {
  let result = (await axios.get(`${ipAddress}/yahooFinanceRoutes/FinancialStatistics/${ticker}`)).data.data;

  return(result);
}