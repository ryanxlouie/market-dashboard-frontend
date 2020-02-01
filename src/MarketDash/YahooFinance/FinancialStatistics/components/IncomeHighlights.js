import React from 'react';

/* Stylesheets */
import { Grid, Paper, Table, TableBody, TableCell, TableRow, Tooltip } from '@material-ui/core';

const IncomeHighlights = (props) => {
  const {
    statsObject,
  } = props;

  return (
    <div>
      <Paper style={{padding: '10px'}}>
        <Grid container>
          <Grid item xs={12}>
            <h3 style={{margin: '0px'}}>
              Income Statement Highlights
            </h3>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell><div><Tooltip title={'Definition: Total amount of money that a company makes'} placement="right"><b style={{cursor: 'pointer'}}>Revenue</b></Tooltip></div><small>over trailing 12 months</small></TableCell>
                  <TableCell>{statsObject['Revenue (ttm)']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div><Tooltip title={'Definition: Total amount of money that a company makes, compared to the corresponding time period of the previous year'} placement="right"><b style={{cursor: 'pointer'}}>Quarterly Revenue Growth</b></Tooltip></div><small>year over year</small></TableCell>
                  <TableCell>{statsObject['Quarterly Revenue Growth (yoy)']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div><Tooltip title={'Definition: Revenue minus company expenses, compared to the corresponding time period of the previous year'} placement="right"><b style={{cursor: 'pointer'}}>Quarterly Earnings Growth</b></Tooltip></div><small>year over year</small></TableCell>
                  <TableCell>{statsObject['Quarterly Earnings Growth (yoy)']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div><Tooltip title={'Definition: Revenue minus company expenses'} placement="right"><b style={{cursor: 'pointer'}}>Gross Profit</b></Tooltip></div><small>over trailing 12 months</small></TableCell>
                  <TableCell>{statsObject['Gross Profit (ttm)']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div><Tooltip title={'Definition: Earnings before interest, taxes, depreciation, and amortization'} placement="right"><b style={{cursor: 'pointer'}}>EBITDA</b></Tooltip></div></TableCell>
                  <TableCell>{statsObject['EBITDA ']}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default IncomeHighlights;