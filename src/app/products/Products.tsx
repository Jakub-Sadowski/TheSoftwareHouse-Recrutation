import { Button, Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { ProductModel, ProductsModel, StoreModel } from 'api-interfaces';
import { commonStyles } from 'app/styles/utilities';
import { CustomPagination, CustomPaginationProps } from 'app/utillities/CustomPagination';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TRY_FETCH_PRODUCTS } from 'redux/products/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { ProductsForm, ProductsFormProps } from './productsForm/ProductsForm';
import { ProductsList } from './productsList/ProductsList';

export const Products = () => {
  const classes = commonStyles();
  const dispatch = useDispatch();
  const { pageCount } = useSelector<StoreModel, ProductsModel>((state) => state.products);
  const [search, setSearch] = useState<string>('');
  const [active, setActive] = useState<boolean>();
  const [promo, setPromo] = useState<boolean>();
  const [page, setPage] = useState(1);
  const limit = isMobile ? 4 : 8; 

  const searchFilter = `${search.length>0 ? `search=${search}&` : ''}`;
  const activeFilter = active ? `active=${active}&` : '';
  const promoFilter = promo  ? `promo=${promo}&` : '';

  const paginationData : CustomPaginationProps = {
    pagesCount: pageCount,
    currentPage: page,
    changePage: setPage,
  }
  const formData : ProductsFormProps = {
    search:{
      value:search,
      handleOnChange: setSearch
    },
    active:{
      value: active,
      handleOnChange: setActive
    },
    promo:{
      value: promo,
      handleOnChange: setPromo
    }

  }
  useEffect(()=>{
      dispatch({ type: TRY_FETCH_PRODUCTS, payload:{path:`product?limit=${limit}&page=${page}&${searchFilter}${activeFilter}${promoFilter}`} });
  },[dispatch, page, search, active, promo])

  return (
    <Container  className={classes.center}>
      <div className={isMobile ? classes.mt5 : `${classes.browserNav}`}>
        <Link className={classes.logo} to={AppRoute.home}>join.tsh.io</Link>
        {!isMobile && <ProductsForm {...formData} /> }
        <Button variant="outlined" className={`${classes.toRight} ${classes.textToNormal} ${classes.colorBlue}`}> Log in </Button>      
      </div>
      {isMobile && <ProductsForm {...formData} /> }
      <ProductsList/>
      <CustomPagination {...paginationData} />
    </Container>
  );
};
