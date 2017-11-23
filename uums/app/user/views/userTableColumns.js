/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import {Privilege, AModal} from '../../resource';

export default () => {
    return [{
        title: '昵称',
        dataIndex: 'nickname',
    }, {
        title: '用户名',
        dataIndex: 'username',
    }, {
        title: '真实姓名',
        dataIndex: 'name',
    }, {
        title: '人员标识',
        dataIndex: 'sn',
    }, {
        title: '创建时间',
        dataIndex: 'createDate',
    }, {
        title: '操作',
        render: (text, record) => {
            return (
                <span>
                    <AModal title="权限" text="查看权限" width="600px">
                        <Privilege id={record.id}/>
                    </AModal>
                </span>
            );
        },
    }];
}