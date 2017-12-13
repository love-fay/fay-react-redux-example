/**
 * Created by feichongzheng on 17/9/27.
 */
import React from 'react';
import Bundle from '../../bundle';
import load from 'bundle-loader?lazy&name=E504!./lazy';

const view = (props) => <Bundle load={load}>{(View) => <View {...props}/>}</Bundle>;

export {view};