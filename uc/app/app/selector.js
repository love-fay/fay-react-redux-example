/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUcApp = (state) => state.ucApp;

export const selectVisibleAppPage = createSelector(
    [getUcApp],
    (ucApp) => ucApp
);
