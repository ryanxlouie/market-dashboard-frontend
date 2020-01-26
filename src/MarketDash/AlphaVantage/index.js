import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Components */
import MenuPage from './MenuPage';
import SwingTracker from './SwingTracker';

class AlphaVantage extends Component {
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
            path="/AlphaVantage/MenuPage"
            render={props => 
              <MenuPage
                changePage={this.changePage}
              />
            }
          />
          <Route
            path="/AlphaVantage/SwingTracker"
            render={props => 
              <SwingTracker />
            }
          />
          <Redirect from="/AlphaVantage" to="/AlphaVantage/MenuPage" />
        </Switch>
      </div>
    )
  }
}

export default AlphaVantage