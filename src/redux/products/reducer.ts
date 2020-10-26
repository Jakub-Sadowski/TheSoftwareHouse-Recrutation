import { Reducer } from 'redux';
import { Action, ProductsModel } from '../../api-interfaces';
import { FETCH_PRODUCTS } from './types';


export const products : Reducer <ProductsModel | Object | undefined, Action<ProductsModel>> = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS :
            return action.payload;
        default:
            return state;
    }
}