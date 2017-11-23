/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsPrivilege = (state) => state.uumsPrivilege;

export const selectVisiblePrivilege = createSelector(
    [getUumsPrivilege],
    (uumsPrivilege) => uumsPrivilege
);
