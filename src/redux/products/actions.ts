import { Action, ProductsModel } from 'api-interfaces';
import { FETCH_PRODUCTS } from './types';

export const getProducts = (
    products: ProductsModel) : Action<ProductsModel> => ({
        type: FETCH_PRODUCTS,
        payload: products
    });
