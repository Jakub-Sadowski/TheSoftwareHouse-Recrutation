import { ofType } from 'redux-observable';
import { getProducts } from './actions';
import { TRY_FETCH_PRODUCTS } from './types';
import { mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { fetchData } from '../../api';
import { Action, ApiRequest, ProductsModel } from 'api-interfaces';

export const getProductsEpic = (action$ : any) =>
    action$.pipe(
        ofType(TRY_FETCH_PRODUCTS),
        mergeMap((action:Action<ApiRequest> ) => 
        from(fetchData<ProductsModel>({path: action.payload.path})
        ).pipe(
            map((response) => getProducts(response))),
            )
    )
