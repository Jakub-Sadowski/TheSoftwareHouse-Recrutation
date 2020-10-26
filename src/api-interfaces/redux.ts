import { Action as ReduxAction } from 'redux';
import { ProductsModel } from './products';

export interface Action<T> extends ReduxAction {
    payload: T;
  }

export interface ApiRequest {
    path:string
}
export interface StoreModel {
  products: ProductsModel;
  logged: boolean;
}