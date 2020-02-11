import React from 'react';

/* Stylesheets */
import { Grid } from '@material-ui/core';
import tempPic from '../../../assets/images/ironman.jpeg';
import SwingTrackerPic from '../../../assets/images/swing.JPG';
import IndustryPerformancePic from '../../../assets/images/industryperformance.JPG';
import TechnicalsPic from '../../../assets/images/technical.JPG';

/* Components */
import NavigationCard from '../../components/NavigationCard';

const MenuPage = (props) => {
  const {
    changePage,
  } = props;

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <NavigationCard
            pic={SwingTrackerPic}
            bodyTitle={'Swing Tracker'}
            bodyText={'See max loss and max gain from investing at a certain point in time'}
            link={'/AlphaVantage/SwingTracker'}
            changePage={changePage}
          />
        </Grid>
        <Grid item xs={4}>
          <NavigationCard
            pic={IndustryPerformancePic}
            bodyTitle={'Industry Performance'}
            bodyText={'See performance over time for each industry'}
            link={'/AlphaVantage/IndustryPerformance'}
            changePage={changePage}
          />
        </Grid>
        <Grid item xs={4}>
          <NavigationCard
            pic={TechnicalsPic}
            bodyTitle={'Technicals Checkoff'}
            bodyText={'See which days pass various technical analysis benchmarks'}
            link={'/AlphaVantage/TechnicalsCheckoff'}
            changePage={changePage}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default MenuPage;