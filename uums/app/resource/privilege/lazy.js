/**
 * Created by feichongzheng on 17/10/9.
 */
import privilegeSagas from './sagas';
import privilegeReducer from './reducer';
import view from './views/privilege';
import {ReducerNames} from '../../constants';
const privilegeName = ReducerNames.privilege;

const reducer = {
    [privilegeName]: privilegeReducer
};

const sagas = {
    [privilegeName]: privilegeSagas
};

export {sagas, reducer, view};