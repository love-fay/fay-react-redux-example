/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import 'FayAntd/menu';
const SubMenu = Menu.SubMenu;
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

let pathname;

class NavLeft extends Component {

    constructor (props) {
        super(props);
        const location = props.location;
        pathname = location.pathname;
        pathname = pathname.indexOf('/') === 0 ? pathname : '/' + pathname;
        this.state = {
            openKeys: ['/'+pathname.split('/')[1]],
        };
    }

    handleClick = (e) => {
        const {history} = this.props;
        let key = e.key;
        if (key !== undefined) {
            pathname = key;
            history.push(key, null);
        }
    };

    render () {
        const {openKeys} = this.state;
        return (
            <Menu onClick={this.handleClick}
                  style={{ width: 150 }}
                  defaultOpenKeys={openKeys}
                  selectedKeys={[pathname]}
                  mode="inline"
                  id="nav-left-menu">
                <SubMenu key='/uums' title={<span><Icon type='appstore'/><span>统一用户</span></span>}>
                    <Menu.Item key='/uums/user'>用户管理</Menu.Item>
                    <Menu.Item key='/uums/org'>机构管理</Menu.Item>
                </SubMenu>
                <SubMenu key='/uc' title={<span><Icon type='setting'/><span>统一配置</span></span>}>
                    <Menu.Item key='/uc/app'>应用系统</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

NavLeft.propTypes = {
    location: PropTypes.any,
    history: PropTypes.object,
};

export default withRouter(NavLeft);
