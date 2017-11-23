/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export default (state = {}, action) => {
    const {type, res, err} = action;
    switch (type) {
        case types.FIND_PRIVILEGE_FETCH: {
            return {
                ...state, type: type
            }
        }
        case types.FIND_PRIVILEGE_SUCCESS: {
            if (res.success) {
                return {
                    ...state, type: type, data: res.data
                }
            } else {
                return {
                    ...state, type: types.FIND_PRIVILEGE_ERROR, message: res.errMessage
                }
            }
        }
        case types.FIND_PRIVILEGE_ERROR: {
            return {
                ...state, type: type, message: err
            }
        }
        default: {
            return state;
        }
    }
}