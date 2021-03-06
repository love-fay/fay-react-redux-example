/**
 * Created by feichongzheng on 17/10/9.
 */
import React from 'react';
import {Bundle} from '../../../../base';
import load from 'bundle-loader?lazy&name=Privilege!./lazy';
import reducer from './reducer';
import sagas from './sagas';

const view = (props) => <Bundle load={load}>{(View) => <View {...props}/>}</Bundle>;

export {view, reducer, sagas};