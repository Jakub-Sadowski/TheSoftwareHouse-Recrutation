import { Action, ProductsModel } from 'api-interfaces';
import { LOG_OUT, LOG_IN } from './types';

export const logIn = (
    logged: boolean) : Action<boolean> => ({
        type: LOG_IN,
        payload:true
    });
export const logOut = (
    logged: boolean) : Action<boolean> => ({
        type: LOG_OUT,
        payload:false
    });