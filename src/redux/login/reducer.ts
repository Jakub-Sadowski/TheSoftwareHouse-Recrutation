import { Reducer } from 'redux';
import { Action, ProductsModel } from '../../api-interfaces';
import { LOG_IN, LOG_OUT } from './types';


export const logged : Reducer <boolean, Action<boolean>> = (state = false, action) => {
    switch (action.type) {
        case LOG_IN :
            return true;
        case LOG_OUT: 
            return false;
        default:
            return state;
    }
}