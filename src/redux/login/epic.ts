import { ActionsObservable, ofType } from 'redux-observable';
import { LOG_IN, LOG_OUT, TRY_LOG_IN, TRY_LOG_OUT } from './types';
import { mapTo } from 'rxjs/operators';
import { Action as ReduxAction } from 'redux';


export const logInEpic = (action$:ActionsObservable<ReduxAction>) =>
    action$.pipe(
        ofType(TRY_LOG_IN),
        mapTo({ type: LOG_IN })
    )

export const logOutEpic = (action$:ActionsObservable<ReduxAction>) =>
    action$.pipe(
        ofType(TRY_LOG_OUT),
        mapTo({ type: LOG_OUT })
    )