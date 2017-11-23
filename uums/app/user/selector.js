/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsUser = (state) => state.uumsUser;

export const selectVisibleUserPage = createSelector(
    [getUumsUser],
    (uumsUser) => uumsUser
);
