/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findUserForPage = (params) => ({
    type: types.FIND_USER_FOR_PAGE,
    params: params
});

export const findUserForPageFetch = () => ({
    type: types.FIND_USER_FOR_PAGE_FETCH
});

export const findUserForPageSuccess = (data, params) => ({
    type: types.FIND_USER_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findUserForPageError = (err, params) => ({
    type: types.FIND_USER_FOR_PAGE_ERROR,
    err: err,
    params: params
});