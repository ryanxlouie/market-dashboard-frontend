import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const MaxGainCard = (props) => {
  const {
    dailyArray,
    chosenIndex,
  } = props;

  let tempMax = dailyArray[chosenIndex].high;
  let tempMaxIndex = chosenIndex;
  for (let a = chosenIndex+1; a < dailyArray.length; a += 1) {
    if (dailyArray[a].high > tempMax) {
      tempMax = dailyArray[a].high;
      tempMaxIndex = a;
    }
  }

  let maxGain = ((tempMax-dailyArray[chosenIndex].open) / dailyArray[chosenIndex].open * 100).toFixed(2);

  return (
    <div>
      <Paper style={{padding: '7px'}}>
        <Grid container item xs={12}>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <b>Maximum Gain</b>
            </Grid>
            <Grid item xs={12}>
              on {dailyArray[tempMaxIndex].date}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div 
              style={{
                color: (maxGain > 0 ? '#66bb6a' : '#ef5350'),
                fontSize: '1.5em',
                textAlign: 'center'
              }}
            >
              {maxGain}%
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default MaxGainCard;