/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import {connect} from 'react-redux';
import {findUserForPage} from '../actions';
import {FIND_USER_FOR_PAGE_FETCH, FIND_USER_FOR_PAGE_SUCCESS, FIND_USER_FOR_PAGE_ERROR} from '../actionTypes';
import {selectVisibleUserPage} from '../selector';
import UserTableColumns from './userTableColumns';

let tableState = {
    bordered: false,
    loading: true,
    pagination: true,
    size: 'middle',
    scroll: undefined,
};

let local = {
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
};

const UserTable = ({uumsUser, userData}) => {
        const {type, params, message} = uumsUser;
        let dataSource = [];
        let pagination = {};
        switch (type) {
            case FIND_USER_FOR_PAGE_FETCH:
                tableState.loading = true;
                local.emptyText = '获取数据中...';
                break;
            case FIND_USER_FOR_PAGE_SUCCESS:
                tableState.loading = false;
                const data = userData(uumsUser);
                dataSource = data.dataSource;
                pagination = data.pagination;
                break;
            case FIND_USER_FOR_PAGE_ERROR:
                tableState.loading = false;
                local.emptyText = message;
                break;
            default:
                tableState.loading = false;
                local.emptyText = '暂无数据';
                break;
        }
        return (
            <Table rowKey={(record) => record.id}
                   {...tableState}
                   columns={UserTableColumns()}
                   locale={local}
                   dataSource={dataSource}
                   pagination={pagination} />
        );
};

const mapStateToProps = (state) => {
    return {
        uumsUser: selectVisibleUserPage(state),
    };
};

const mapDispatchToProps = (dispatch) => {

    const userData = (uumsUser) => {
        const result = uumsUser.data;
        const success = result.success;
        if (success) {
            const {params} = uumsUser;
            const data = result.data;
            local.emptyText = '暂无数据';
            return {
                dataSource: data.pageData,
                pagination: {
                    current: data.currentPage + 1,
                    showQuickJumper: true,
                    total: data.totalRows,
                    pageSize: data.pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '30', '40'],
                    onShowSizeChange: (current, pageSize) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        newParams.size = pageSize;
                        dispatch(findUserForPage(newParams));
                    },
                    onChange: (current) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        dispatch(findUserForPage(newParams));
                    },
                },
            };
        } else {
            local.emptyText = result.errMessage;
            return {
                dataSource: [],
                pagination: {},
            };
        }
    };

    const refresh = (params) => {
        dispatch(findUserForPage(params));
    };
    refresh({number: 0, size: 20});

    return {
        userData: userData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
