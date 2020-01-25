import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper } from '@material-ui/core';

/* Routes */
import beaRoutes from '../../../routes/BeaRoutes';

/* Components */
import LineGraph from './components/LineGraph';
import MetricCard from './components/MetricCard';

class GrossDomesticProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiFinished: false,
      gdpData: [],
    }
  }

  componentDidMount() {
    beaRoutes.getGDP(false)
      .then(result => {
        this.setState({
          apiFinished: true,
          gdpData: result,
        });
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    const { apiFinished, gdpData } = this.state;
    if (!apiFinished) {
      return (<div></div>)
    }

    console.log(this.state);
    return (
      <div>
        <Grid container className="row-mimic">
          <Grid item xs={12}>
            <Paper style={{padding: '10px'}}>
              <h4 style={{margin: '0px'}}>
                United States Gross Domestic Product
              </h4>
              <LineGraph
                gdpData={gdpData['GDP Data']}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <MetricCard
              title="Average Gain"
              titleSecondary="in an expansion"
              color="green"
              type="percent"
              data={gdpData.Metrics['Average Gain in Expansion']}
            />
          </Grid>
          <Grid item xs={3}>
              <MetricCard
                title="Average Duration"
                titleSecondary="of an expansion"
                color="green"
                type="time"
                data={gdpData.Metrics['Average Time in Expansion']}
              />
            </Grid>
            <Grid item xs={3}>
              <MetricCard
                title="Average Loss"
                titleSecondary="in a recession"
                color="red"
                type="percent"
                data={gdpData.Metrics['Average Loss in Recession']}
              />
            </Grid>
            <Grid item xs={3}>
              <MetricCard
                title="Average Duration"
                titleSecondary="of a recession"
                color="red"
                type="time"
                data={gdpData.Metrics['Average Time in Recession']}
              />
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default GrossDomesticProductPage;