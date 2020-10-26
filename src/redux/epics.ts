import { combineEpics } from 'redux-observable';
import { logInEpic, logOutEpic } from './login/epic';
import { getProductsEpic } from './products/epic';

export const rootEpic = combineEpics(getProductsEpic, logOutEpic, logInEpic);