import { CircularProgress, Grid } from '@material-ui/core';
import { ProductsModel, StoreModel } from 'api-interfaces';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
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
                    <Grid container className={listClasses.cardsGrid}>
                        {items.map((item)=>
                        <Grid item xs>
                            <Product key={item.id} {...item} />
                        </Grid>)} 
                    </Grid>)
        }
           
        else
            return(<div>blad</div>)
    }
    else
        return <div className={listClasses.center}><CircularProgress className={listClasses.spinner} /></div> 

}