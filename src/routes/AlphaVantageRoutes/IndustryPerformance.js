import axios from 'axios';
import { cloneDeep } from 'lodash';

import { avApiKey } from '../routeConfig';

// Sample data
const sampleData = {
  "Meta Data": {
    "Information": "US Sector Performance (realtime & historical)",
    "Last Refreshed": "2020-01-26 20:19:39 US/Eastern"
  },
  "Rank A: Real-Time Performance": {
    "Utilities": "0.33%",
    "Real Estate": "-0.23%",
    "Information Technology": "-0.45%",
    "Industrials": "-0.48%",
    "Consumer Staples": "-0.65%",
    "Materials": "-0.69%",
    "Communication Services": "-1.04%",
    "Energy": "-1.17%",
    "Consumer Discretionary": "-1.33%",
    "Financials": "-1.36%",
    "Health Care": "-1.68%"
  },
  "Rank B: 1 Day Performance": {
    "Utilities": "0.33%",
    "Real Estate": "-0.23%",
    "Information Technology": "-0.45%",
    "Industrials": "-0.48%",
    "Consumer Staples": "-0.65%",
    "Materials": "-0.69%",
    "Communication Services": "-1.04%",
    "Energy": "-1.17%",
    "Consumer Discretionary": "-1.33%",
    "Financials": "-1.36%",
    "Health Care": "-1.68%"
  },
  "Rank C: 5 Day Performance": {
    "Utilities": "3.18%",
    "Real Estate": "1.14%",
    "Information Technology": "1.03%",
    "Consumer Staples": "-0.22%",
    "Communication Services": "-0.49%",
    "Industrials": "-1.03%",
    "Consumer Discretionary": "-1.21%",
    "Financials": "-1.76%",
    "Materials": "-1.79%",
    "Health Care": "-1.95%",
    "Energy": "-4.88%"
  },
  "Rank D: 1 Month Performance": {
    "Utilities": "6.84%",
    "Information Technology": "6.82%",
    "Real Estate": "4.89%",
    "Communication Services": "3.46%",
    "Industrials": "1.76%",
    "Consumer Discretionary": "1.49%",
    "Consumer Staples": "1.03%",
    "Health Care": "-0.09%",
    "Financials": "-1.03%",
    "Materials": "-2.18%",
    "Energy": "-6.03%"
  },
  "Rank E: 3 Month Performance": {
    "Information Technology": "20.75%",
    "Health Care": "11.59%",
    "Communication Services": "10.40%",
    "Industrials": "7.16%",
    "Financials": "6.46%",
    "Utilities": "5.94%",
    "Materials": "4.17%",
    "Consumer Discretionary": "4.04%",
    "Consumer Staples": "3.95%",
    "Real Estate": "-0.02%",
    "Energy": "-1.75%"
  },
  "Rank F: Year-to-Date (YTD) Performance": {
    "Information Technology": "6.20%",
    "Utilities": "5.75%",
    "Communication Services": "3.77%",
    "Real Estate": "3.27%",
    "Industrials": "2.46%",
    "Consumer Staples": "1.00%",
    "Consumer Discretionary": "0.45%",
    "Health Care": "0.43%",
    "Financials": "-1.44%",
    "Materials": "-2.74%",
    "Energy": "-5.86%"
  },
  "Rank G: 1 Year Performance": {
    "Information Technology": "51.29%",
    "Communication Services": "28.05%",
    "Utilities": "27.17%",
    "Real Estate": "22.58%",
    "Industrials": "21.68%",
    "Consumer Staples": "21.19%",
    "Consumer Discretionary": "18.81%",
    "Financials": "18.01%",
    "Health Care": "15.11%",
    "Materials": "14.32%",
    "Energy": "-5.88%"
  },
  "Rank H: 3 Year Performance": {
    "Information Technology": "104.56%",
    "Health Care": "48.47%",
    "Consumer Discretionary": "48.23%",
    "Utilities": "41.29%",
    "Financials": "31.95%",
    "Industrials": "29.70%",
    "Real Estate": "28.99%",
    "Consumer Staples": "21.28%",
    "Materials": "16.66%",
    "Communication Services": "7.79%",
    "Energy": "-20.61%"
  },
  "Rank I: 5 Year Performance": {
    "Information Technology": "146.76%",
    "Consumer Discretionary": "76.20%",
    "Financials": "57.26%",
    "Industrials": "46.58%",
    "Health Care": "45.28%",
    "Utilities": "38.82%",
    "Consumer Staples": "27.88%",
    "Materials": "23.91%",
    "Communication Services": "23.40%",
    "Energy": "-24.38%"
  },
  "Rank J: 10 Year Performance": {
    "Information Technology": "385.63%",
    "Consumer Discretionary": "332.45%",
    "Health Care": "224.53%",
    "Industrials": "188.68%",
    "Financials": "163.99%",
    "Consumer Staples": "140.85%",
    "Utilities": "128.69%",
    "Materials": "96.69%",
    "Communication Services": "79.27%",
    "Energy": "1.69%"
  }
};

export default async function getIndustryPerformance(realData) {
  let result;
  if (realData) {
    let res = await axios.get(`https://www.alphavantage.co/query?function=SECTOR&apikey=${avApiKey}`);
    if (res.data.hasOwnProperty('Note')) {
      return ('Cannot call api any longer');
    }
    result = res.data;
  }
  else {
    result = cloneDeep(sampleData);
  }

  delete result['Meta Data'];

  return (result);
}