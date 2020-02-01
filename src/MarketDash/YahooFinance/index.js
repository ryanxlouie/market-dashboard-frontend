import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Components */
import MenuPage from './MenuPage';
import FinancialStatistics from './FinancialStatistics';

class YahooFinance extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(link) {
    const { pathProps } = this.props;
    pathProps.history.push(link);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/YahooFinance/MenuPage"
            render={props => 
              <MenuPage
                changePage={this.changePage}
              />
            }
          />
          <Route
            path="/YahooFinance/FinancialStatistics"
            render={props => 
              <FinancialStatistics/>
            }
          />
          <Redirect from="/YahooFinance" to="/YahooFinance/MenuPage" />
        </Switch>
      </div>
    )
  }
}

export default YahooFinance;