/**
 * Created by feichongzheng on 17/9/25.
 */
import {FIND_APP_FOR_PAGE, FIND_APP_FOR_PAGE_FETCH, FIND_APP_FOR_PAGE_SUCCESS, FIND_APP_FOR_PAGE_ERROR} from './actionTypes';

export const findAppForPage = (params) => ({
    type: FIND_APP_FOR_PAGE,
    params: params
});

export const findAppForPageFetch = () => ({
    type: FIND_APP_FOR_PAGE_FETCH
});

export const findAppForPageSuccess = (data, params) => ({
    type: FIND_APP_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findAppForPageError = (err, params) => ({
    type: FIND_APP_FOR_PAGE_ERROR,
    err: err,
    params: params
});