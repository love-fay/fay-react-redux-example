/**
 * Created by feichongzheng on 17/8/25.
 */
import React, {Component} from 'react';
import Tag from 'antd/lib/tag';
import Alert from 'antd/lib/alert';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Tabs from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;
import 'FayAntd/tabs/style/index.js';
import 'FayAntd/tag/style/index.js';
import 'FayAntd/icon/style/index.js';
import 'FayAntd/alert/style/index.js';
import 'FayAntd/spin/style/index.js';
import {findPrivilege} from '../actions';
import {FIND_PRIVILEGE_FETCH, FIND_PRIVILEGE_SUCCESS, FIND_PRIVILEGE_ERROR} from '../actionTypes';
import {connect} from "react-redux";
import {selectVisiblePrivilege} from '../selector';

class Privilege extends Component {

    componentWillMount(){
        this.props.getData();
    }

    render () {
        const {type, message, data} = this.props.uumsPrivilege;
        switch (type) {
            case FIND_PRIVILEGE_FETCH:
                return <Spin tip='loading'><Alert message='正在获取被授予的权限列表' type='info' showIcon/></Spin>;
            case FIND_PRIVILEGE_SUCCESS:
                if(data === undefined || JSON.stringify(data) === '{}'){
                    return <Alert message='尚未授予任何权限' type='info' showIcon/>;
                }
                return (
                    <Tabs>
                        {this.props.loopObj(data)}
                    </Tabs>
                );
            case FIND_PRIVILEGE_ERROR:
                return <Alert message={message} type='error' showIcon/>;
            default:
                return <Alert message='准备获取权限列表' type='error' showIcon/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        uumsPrivilege: selectVisiblePrivilege(state),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const loop = (data) => data.map((item, n) => {
        const arr = item.split(',');
        const detail = (d) => d.map((i, k) => {
            const [type, name] = i.split('_');
            if (type === 'APP') {
                return <span key={k+name}><Tag color="#108ee9">系统</Tag>{name}</span>;
            } else if (type === 'MENU') {
                return <span key={k+name}><Icon type="arrow-right" /><Tag color="#87d068">菜单</Tag>{name}</span>;
            } else if (type === 'CONTROLLER') {
                return <span key={k+name}><Icon type="arrow-right" /><Tag color="#2db7f5">请求</Tag>{name}</span>;
            } else {
                return '';
            }
        });
        return <div style={{marginTop:'10px'}} key={n}>{detail(arr)}</div>;
    });
    const loopObj = (data) => {
        let nodes = [];
        for (let i in data) {
            if (data.hasOwnProperty(i) === true) {
                nodes.push(<TabPane tab={i} key={i}>{loop(data[i])}</TabPane>);
            }
        }
        return nodes;
    };

    const getData = () => {
        dispatch(findPrivilege({dataId: ownProps.id}));
    };

    return {
        loopObj: loopObj,
        getData: getData
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Privilege);
