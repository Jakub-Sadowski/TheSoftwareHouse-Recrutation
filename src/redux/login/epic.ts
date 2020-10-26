import { ofType } from 'redux-observable';
import { logIn, logOut } from './actions';
import { LOG_IN, LOG_OUT, TRY_LOG_IN, TRY_LOG_OUT } from './types';
import { mapTo } from 'rxjs/operators';


export const logInEpic = (action$ : any) =>
    action$.pipe(
        ofType(TRY_LOG_IN),
        mapTo({ type: LOG_IN })
    )

export const logOutEpic = (action$ : any) =>
    action$.pipe(
        ofType(TRY_LOG_OUT),
        mapTo({ type: LOG_OUT })
    )