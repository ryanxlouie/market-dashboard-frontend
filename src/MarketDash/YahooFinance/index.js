import React, { Component } from 'react';
import axios from 'axios';
import request from 'request';

class YahooFinance extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // request('http://www.google.com', (error, response, body) => {
    //   console.log('error', error);
    //   console.log('response', response);
    //   console.log('body', body);
    // });
    axios.get('http://localhost:5000/testRoutes/yahoo')
      .then(result => {
        console.log(result);
      })
  }

  render() {
    return (
      <div>
        Yahoo finance
      </div>
    )
  }
}

export default YahooFinance;