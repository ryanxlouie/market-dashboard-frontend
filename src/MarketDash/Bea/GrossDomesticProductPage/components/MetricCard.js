import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const MetricCard = (props) => {
  const {
    title,
    titleSecondary,
    color,
    type,
    data,
  } = props;
  return (
    <div>
      <Paper style={{padding: '7px'}}>
        <Grid container item xs={12}>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <b>{title}</b> 
            </Grid>
            <Grid item xs={12}>
              <small>{titleSecondary}</small>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div 
              style={{
                color: `${(color === 'red' ? '#ef5350' : '#66bb6a')}`,
                fontSize: '1.5em',
                textAlign: 'center'
              }}
            >
              {(type === 'percent') ? 
                `${(data*100).toFixed(2)}%`
                :
                `${data.toFixed(2)} yrs`
              }
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
};

export default MetricCard;