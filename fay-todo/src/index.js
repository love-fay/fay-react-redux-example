/**
 * Created by feichongzheng on 16/12/7.
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './app/TodoApp';
import store from './app/Store.js';

render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app'));
