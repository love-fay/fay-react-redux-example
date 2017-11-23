/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Layout12} from '../layout';
import {Login} from '../../../base';

const history = createBrowserHistory();

const HomePage = () => {
    return (
        <Layout12>
            <div>布局</div>
        </Layout12>
    );
};

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    );
}
