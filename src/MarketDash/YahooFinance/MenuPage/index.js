import React from 'react';

/* Stylesheets */
import { Grid } from '@material-ui/core';
// import tempPic from '../../../assets/images/ironman.jpeg';
import financialHighlightsPic from '../../../assets/images/financialhighlights.JPG';

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
            pic={financialHighlightsPic}
            bodyTitle={'Financial Statistics'}
            bodyText={'See various financial statistics pulled from yahoo.com'}
            link={'/YahooFinance/FinancialStatistics'}
            changePage={changePage}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default MenuPage;