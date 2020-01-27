import React from 'react';

/* Stylesheets */
import { Grid } from '@material-ui/core';
import SwingTrackerPic from '../../../assets/images/swing.JPG';

/* Components */
import NavigationCard from '../../components/NavigationCard';

const MenuPage = (props) => {
  const {
    changePage,
  } = props;

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <NavigationCard
            pic={SwingTrackerPic}
            bodyTitle={'Swing Tracker'}
            bodyText={'See max loss and max gain from investing at a certain point in time'}
            link={'/AlphaVantage/SwingTracker'}
            changePage={changePage}
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