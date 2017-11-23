/**
 * Created by feichongzheng on 17/9/28.
 */
import cookie from 'react-cookie';

const loginUser = () => {
    return cookie.load('current-user');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'object';
};

const logout = (history, pathname) => {
    cookie.remove('current-user');
    history.push('/login?returnPath=' + pathname, {nextPathname: pathname});
};

const goToLogin = (history, pathname) => {
    cookie.remove('current-user');
    history.push('/login?returnPath=' + pathname, {nextPathname: pathname});
};

export {loginUser, isLogin, logout, goToLogin};