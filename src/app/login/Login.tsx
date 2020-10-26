import { Container, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { AppRoute } from 'routing/AppRoute.enum';
import { LoginForm } from './loginForm/LoginForm';
import { commonStyles } from 'app/styles/utilities';

export const Login :FC = () => {
  const classes = commonStyles();

  return (
    <Grid container spacing={3} >
       {!isMobile && <Grid item xs={6}>
          <img alt="loginPhoto" src={require("../../assets/Bitmap.png")}/>
        </Grid>}
        <Grid item xs={isMobile ? 12 : 6}>
          <Container maxWidth="sm" className={classes.center}>
            <div className={classes.mt5}>
              <Link className={classes.logo} to={AppRoute.home}>join.tsh.io</Link>
            </div>
             
            <div className={classes.centerVertically}>
               <h2>Login</h2>
                <LoginForm/>
            </div>
              
          </Container>
        </Grid>
      
      </Grid>
  );
};
