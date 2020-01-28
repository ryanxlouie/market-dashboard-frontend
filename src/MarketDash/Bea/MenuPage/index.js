import React from 'react';

/* Stylesheets */
import { Grid } from '@material-ui/core';
import GDPSamplePic from '../../../assets/images/gdp.JPG';

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
            pic={GDPSamplePic}
            bodyTitle={'Gross Domestic Product'}
            bodyText={'Gross Domestic Product'}
            link={'/Bea/GrossDomesticProduct'}
            changePage={changePage}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default MenuPage;
