/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import {Bundle} from '../../../base';
import load from 'bundle-loader?lazy&name=Uums!./lazy';

const view = (props) => {
    return (
        <Bundle load={load}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {view};