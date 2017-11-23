/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'react-router-redux';
import {Layout12} from '../../../layout';
import {RouterPaths} from '../constants';
import {initStore, Login, error} from '../../../base';
let store = initStore();

import Uums from '../../../uums';
import Uc from '../../../uc';

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
                    <Route path="/504" component={error.E504}/>
                    <Route path='/404' component={error.E404}/>
                    <Route path='/401D3' component={error.E401D3}/>
                    <Route path='/login' component={Login}/>
                    <Route path={RouterPaths.UUMS} component={Uums}/>
                    <Route path={RouterPaths.UC} component={Uc}/>
                    <Route component={error.E404}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
