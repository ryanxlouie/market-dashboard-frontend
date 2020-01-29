import React, { Component } from 'react';

/* Stylesheets */
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

/* Routes */
const alphaVantageRoutes = require('../../../routes/alphaVantageRoutes');

class IndustryPerformance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiFinished: false,
      apiData: {},
    }
  }

  componentDidMount() {
    alphaVantageRoutes.getIndustryPerformance()
      .then(result => {
        this.setState({
          apiFinished: true,
          apiData: result,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { apiFinished, apiData } = this.state;
    if (!apiFinished) {
      return (<div></div>)
    }

    console.log(this.state);
    const tableHeaders = Object.keys(apiData[Object.keys(apiData)[1]]).sort((a,b) => (a > b ? 1 : -1 ));

    return (
      <div>
        <Grid container className="row-mimic">
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Industry</TableCell>
                    {tableHeaders.map((x, index) => (
                      <TableCell key={index}>{x}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(apiData).map((time, index) => (
                    <TableRow key={index}>
                      <TableCell>{time}</TableCell>
                      {tableHeaders.map((header, index) => (
                        <TableCell 
                          key={index}
                          style={{color: (
                            apiData[time].hasOwnProperty(header) &&
                            apiData[time][header].includes('-') ? '#ef5350' : '#66bb6a'
                          )}}
                        >
                          {apiData[time][header]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default IndustryPerformance;