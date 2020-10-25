import { Button, Container } from '@material-ui/core';
import { commonStyles } from 'app/styles/utilities';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { ProductsForm } from './productsForm/ProductsForm';

export const Products = () => {
  const classes = commonStyles();

  return (
    <Container maxWidth="sm" className={classes.center}>
      <div className={classes.mt5}>
        <Link className={classes.logo} to={AppRoute.home}>join.tsh.io</Link>
        <Button variant="outlined" className={`${classes.toRight} ${classes.textToNormal} ${classes.colorBlue}`}> Log in </Button>
      </div>
      <ProductsForm/>
      
    </Container>
  );
};
