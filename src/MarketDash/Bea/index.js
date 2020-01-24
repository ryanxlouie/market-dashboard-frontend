import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper } from '@material-ui/core';

class Bea extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              Graph here
            </Paper>
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
}

export default Bea;