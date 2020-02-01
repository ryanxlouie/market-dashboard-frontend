import React from 'react';

/* Stylesheets */
import { Grid, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const BalanceSheetHighlights = (props) => {
  const {
    statsObject,
  } = props;

  return (
    <div>
      <Paper style={{padding: '10px'}}>
        <Grid container>
          <Grid item xs={12}>
            <h3 style={{margin: '0px'}}>
              Balance Sheet Highlights
            </h3>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell><div><b>Total Cash</b></div><small>most recent quarter</small></TableCell>
                  <TableCell>{statsObject['Total Cash (mrq)']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div><b>Total Debt</b></div><small>most recent quarter</small></TableCell>
                  <TableCell>{statsObject['Total Debt (mrq)']}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default BalanceSheetHighlights;