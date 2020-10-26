import { CircularProgress, Grid } from '@material-ui/core';
import { ProductsModel, StoreModel } from 'api-interfaces';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { EmptyList } from '../emptyList/EmptyList';
import { Product } from '../product/Product';
import { productsListStyles } from './productsListStyles';

export const ProductsList = () => {
    const { items, itemCount } = useSelector<StoreModel, ProductsModel>((state) => state.products);
    const listClasses = productsListStyles();
    
   
    if(items){
        if(itemCount !== 0){
            if(isMobile)
                 return(<>
                    {items.map((item)=> <Product key={item.id} {...item} /> )} </> )
            else
                return(
                    <Grid container spacing={2}>
                        {items.map((item)=>
                        <Grid key={item.id} item xs>
                            <Product  {...item} />
                        </Grid>)} 
                    </Grid>)
        }
           
        else
            return(<EmptyList/>)
    }
    else
        return <div className={listClasses.center}><CircularProgress className={listClasses.spinner} /></div> 

}