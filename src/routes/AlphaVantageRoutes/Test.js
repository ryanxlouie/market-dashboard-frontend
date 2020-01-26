import axios from 'axios';

import { avApiKey } from '../routeConfig';

export default async function getStockTest() {
  // const result = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=${avApiKey}`);
  const result = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${avApiKey}`);

  return (result);
}