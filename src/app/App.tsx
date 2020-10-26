import React from 'react';
import { AppRoutes } from 'routing/AppRoutes';
import { CssBaseline, Grid } from '@material-ui/core';
import { commonStyles } from 'app/styles/utilities';
import './app.css';

export const App = () => {
  const classes = commonStyles();

  return(
    <Grid container className={classes.mainContainer}>
      <CssBaseline />
      <AppRoutes />
    </Grid>

  ) ;
};
