import React from 'react';
import './app.css';
import { AppRoutes } from 'routing/AppRoutes';
import { CssBaseline, Grid } from '@material-ui/core';
import { commonStyles } from 'app/styles/utilities';

export const App = () => {
  const classes = commonStyles();

  return(
    <Grid container spacing={3} className={classes.mainContainer}>
      <CssBaseline />
      <AppRoutes />
    </Grid>

  ) ;
};
