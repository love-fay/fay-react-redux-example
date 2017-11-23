/**
 * Created by feichongzheng on 16/12/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {user} from '../../../../base';
import { withRouter } from 'react-router-dom';
import {view as User} from '../../user';
import {RouterPaths} from '../../constants';
import { error } from '../../../../base';
import { Layout12 } from '../../../../layout';

class Uums extends Component{

    componentWillMount(){
        const {goToLogin} = this.props;
        if (!user.isLogin()) {
            goToLogin();
        }
    }

    /**
     * 这里的注释是为了提醒在实际项目中会出现因context的改变导致部门页面渲染不可控的情况
     * 下面是示例伪代码
     */
    // shouldComponentUpdate(nextProps) {
    //     const pathname = this.props.location.pathname;
    //     const nextPathname = nextProps.location.pathname;
    //     const type = this.props.uums.type;
    //     const nextType = nextProps.uums.type;
    //     return !(pathname === nextPathname && type === nextType);
    // }

    render(){
        const {getChildrenMatchUrl} = this.props;
        if (user.isLogin()) {
            return <Layout12>{getChildrenMatchUrl()}</Layout12>;
        } else {
            return <div>需要登录</div>;
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const goToLogin = () => {
        const {location, history} = ownProps;
        const {pathname} = location;
        user.goToLogin(history, pathname);
    };

    const getChildrenMatchUrl = () => {
        const {pathname} = ownProps.location;
        switch (pathname){
            case RouterPaths.USER:
                return <User {...ownProps}/>;
            default:
                return <error.E404/>;
        }
    };

    return {
        goToLogin: goToLogin,
        getChildrenMatchUrl: getChildrenMatchUrl
    }
};

export default withRouter(connect(null, mapDispatchToProps)(Uums));
