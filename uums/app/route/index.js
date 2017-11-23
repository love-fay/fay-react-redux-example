/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'react-router-redux';
import {initStore, Login} from '../../../base';
let store = initStore();
import {view as Uums} from '../uums';
import {Layout12} from '../../../layout';

const history = createBrowserHistory();

const HomePage = () => {
    return (
        <Layout12>
            <div>首页</div>
        </Layout12>
    );
};

export default () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact strict path="/" component={HomePage}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/uums/' component={Uums}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
