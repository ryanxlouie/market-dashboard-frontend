# Ryan's Market Dashboard Frontend
By Ryan Louie (ryanloui95@gmail.com)

## Table of Contents
* [Basic Installation](#basic-installation)
* [Data Sources](#data-sources)

## Basic Installation
```bash
# Clone the frontend
$ git clone https://github.com/ryanxlouie/market-dashboard-frontend.git frontend
$ cd frontend
$ npm install
$ npm run start

$ cd ..
# Clone the backend
$ git clone https://github.com/ryanxlouie/market-dashboard-backend.git backend
$ cd backend
$ npm install
$ npm run mock

```
Running "npm run mock" tells the backend to return sample data stored as constants. In order to retrieve real data, you must run "npm run start" and have a config file at the top level of the backend project. The config file should look like this:

```javascript
// config.js
// Bureau of Economic Analysis
const beaApiKey = 'abcdefg';

// AlphaVantage
const avApiKey = 'abcdefg'

module.exports = {
  beaApiKey,
  avApiKey,
}
```
You can get api keys for both websites from the sources below.

## Data Sources
- [AlphaVantage](https://www.alphavantage.co/)
- [Bureau of Economic Analysis](https://www.bea.gov/)
- [Yahoo Finance](https://finance.yahoo.com/)