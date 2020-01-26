import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const ChosenDateCard = (props) => {
  const {
    chosenDate
  } = props;

  return (
    <div>
      <Paper style={{padding: '7px'}}>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            If you had invested in:
          </Grid>
          <Grid item xs={12}>
            <b>{chosenDate}</b>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default ChosenDateCard;