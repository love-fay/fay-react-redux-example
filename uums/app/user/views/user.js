/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import UserTable from './userTable';

export default () => {
    return (
        <Card>
            <UserTable />
        </Card>
    );
}
