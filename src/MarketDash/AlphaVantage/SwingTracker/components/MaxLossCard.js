import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const MaxLossCard = (props) => {
  const {
    dailyArray,
    chosenIndex,
  } = props;

  let tempLow = dailyArray[chosenIndex].low;
  let tempLowIndex = chosenIndex;
  for (let a = chosenIndex+1; a < dailyArray.length; a += 1) {
    if (dailyArray[a].low < tempLow) {
      tempLow = dailyArray[a].low;
      tempLowIndex = a;
    }
  }

  let maxLoss = ((tempLow-dailyArray[chosenIndex].open) / dailyArray[chosenIndex].open * 100).toFixed(2);

  return (
    <div>
      <Paper style={{padding: '7px'}}>
        <Grid container item xs={12}>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <b>Maximum Loss</b>
            </Grid>
            <Grid item xs={12}>
              on {dailyArray[tempLowIndex].date}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div 
              style={{
                color: (maxLoss > 0 ? '#66bb6a' : '#ef5350'),
                fontSize: '1.5em',
                textAlign: 'center'
              }}
            >
              {maxLoss}%
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default MaxLossCard;