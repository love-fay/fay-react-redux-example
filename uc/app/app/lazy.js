/**
 * Created by feichongzheng on 17/9/25.
 */
import appSagas from './sagas';
import appReducer from './reducer';
import view from './views/app';
import {ReducerNames} from '../constants';
const appName = ReducerNames.app;
const reducer = {
    [appName]: appReducer
};

const sagas = {
    [appName]: appSagas
};

export {sagas, reducer, view};