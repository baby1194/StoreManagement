import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './Info.css';

const Info = ({ data }) => (
  <div className="container">
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={3} component={Card} className="card infected">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="h2">
            {
              data.confirmed
                ? <CountUp start={0} end={data.confirmed} duration={2.75} separator="," />
                : 'Loading...'
            }
          </Typography>
          <Typography color="textSecondary">
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of active cases of COVID-19.
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className="card recovered">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5" component="h2">
            {
              data.confirmed
                ? <CountUp start={0} end={data.confirmed} duration={2.75} separator="," />
                : 'Loading...'
            }
          </Typography>
          <Typography color="textSecondary">
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of recoveries from COVID-19.
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className="card deaths">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="h2">
            {
              data.confirmed
                ? <CountUp start={0} end={data.confirmed} duration={2.75} separator="," />
                : 'Loading...'
            }
          </Typography>
          <Typography color="textSecondary">
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of deaths caused by COVID-19.
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
);

export default Info;
