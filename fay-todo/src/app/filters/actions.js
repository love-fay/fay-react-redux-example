/**
 * Created by feichongzheng on 17/9/25.
 */
import {SET_FILTER} from './actionTypes.js';

export const setFilter = filterType => ({
    type: SET_FILTER,
    filter: filterType
});