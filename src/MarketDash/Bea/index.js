import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Stylesheets */

/* Components */
import MenuPage from './MenuPage';
import GrossDomesticProductPage from './GrossDomesticProductPage';

class Bea extends Component {
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
            path="/Bea/MenuPage"
            render={props => 
              <MenuPage
                changePage={this.changePage}
              />
            }
          />
          <Route
            path="/Bea/GrossDomesticProduct"
            render={props => 
              <GrossDomesticProductPage/>
            }
          />
          <Route
            path="Bea/Secondary"
            render={props => 
              <div>secondary</div>
            }
          />
          <Redirect from="/Bea" to="/Bea/MenuPage" />
        </Switch>
      </div>
    )
  }
}

export default Bea;