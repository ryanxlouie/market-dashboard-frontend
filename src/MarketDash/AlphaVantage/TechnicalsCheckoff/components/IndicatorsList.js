import React from 'react';
import { Grid, Paper, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const IndicatorsList = (props) => {
  const {
    indicatorsObject,
    handleCheckbox,
  } = props;

  const GreenCheckbox = withStyles({
    root: {
      '&$checked': {
        color: '#66bb6a',
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  return (
    <div>
      <Paper style={{padding: '7px'}}>
        <Grid container item xs={12}>
          <FormControl>
            <FormLabel>Select Indicators:</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={indicatorsObject.sma}
                    onChange={(e) => handleCheckbox('sma', e)}
                  />
                }
                label="Simple Moving Average (15 day)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    checked={indicatorsObject.rsi}
                    onChange={(e) => handleCheckbox('rsi', e)}
                  />
                }
                label="Relative Strength Index"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Paper>
    </div>
  )
}

export default IndicatorsList;