/**
 * Created by feichongzheng on 17/10/23.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default function createReducer(asyncReducers) {
    const reducers = {
        ...asyncReducers,
        router: routerReducer
    };
    return combineReducers(reducers);
}