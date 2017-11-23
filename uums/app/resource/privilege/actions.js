/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findPrivilege = (params) => ({
    type: types.FIND_PRIVILEGE,
    params: params
});

export const findPrivilegeFetch = () => ({
    type: types.FIND_PRIVILEGE_FETCH
});

export const findPrivilegeSuccess = (res) => ({
    type: types.FIND_PRIVILEGE_SUCCESS,
    res: res
});

export const findPrivilegeError = (err) => ({
    type: types.FIND_PRIVILEGE_ERROR,
    err: err
});
