import React from 'react';

/* Stylesheets */
import { Grid } from '@material-ui/core';
import IronMan from '../../../assets/images/ironman.jpeg'

/* Components */
import NavigationCard from './components/NavigationCard';

const MenuPage = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <NavigationCard
            pic={IronMan}
            bodyTitle={'Gross Domestic Product'}
            bodyText={'Gross Domestic Product'}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          Cards go here
        </Grid>
      </Grid>
    </div>
  )
}

export default MenuPage;
