import { combineReducers } from 'redux';
import { products } from './products/reducer';
import { logged } from './login/reducer';

export const rootReducer = combineReducers({ products, logged });