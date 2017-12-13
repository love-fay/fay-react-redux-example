/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import {Bundle} from '../../../base';
import load from 'bundle-loader?lazy&name=Uc!./lazy';

const view = (props) => <Bundle load={load}>{(View) => <View {...props}/>}</Bundle>;

export {view};