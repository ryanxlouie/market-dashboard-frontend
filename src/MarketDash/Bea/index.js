import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Stylesheets */

/* Components */
import MenuPage from './MenuPage';

class Bea extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/Bea/MenuPage"
            render={props => 
              <MenuPage/>
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