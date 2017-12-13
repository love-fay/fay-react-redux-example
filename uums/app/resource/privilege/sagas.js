/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    findPrivilegeFetch, findPrivilegeSuccess, findPrivilegeError
} from './actions';
import {FIND_PRIVILEGE} from './actionTypes';
import {privilege} from 'fay-base/api';

function findPrivilege(data) {
    /**
     * 伪异步请求
     */
    const {dataId} = data;
    let promise;
    if(dataId === '1'){
        promise = privilege.find1();
    }else if(dataId === '2'){
        promise = privilege.find2();
    }else{
        promise = privilege.find3();
    }
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchPrivilege(data) {
    try {
        yield put(findPrivilegeFetch());
        const result = yield call(findPrivilege, data.params);
        yield put(findPrivilegeSuccess(result));
    } catch (e) {
        yield put(findPrivilegeError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_PRIVILEGE, fetchPrivilege);
}

export default sagas;