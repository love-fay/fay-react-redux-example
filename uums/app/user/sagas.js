/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {user} from 'FayApi';
import {findUserForPageFetch, findUserForPageSuccess, findUserForPageError} from './actions';
import {FIND_USER_FOR_PAGE} from './actionTypes';

function userPage() {
    /**
     * 伪异步请求
     */
    const promise = user.findForPage();
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchUserPage(data) {
    const params = data.params;
    try {
        yield put(findUserForPageFetch());
        const result = yield call(userPage);
        yield put(findUserForPageSuccess(result, params));
    } catch (e) {
        yield put(findUserForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_USER_FOR_PAGE, fetchUserPage);
}

export default sagas;