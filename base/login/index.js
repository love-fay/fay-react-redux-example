/**
 * Created by feichongzheng on 17/9/27.
 */
import React from 'react';
import Bundle from '../bundle';
import load from 'bundle-loader?lazy&name=Login!./lazy';

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