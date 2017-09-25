/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import {view as Todos} from './todos';
import {view as Filter} from './filters';

function TodoApp() {
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    );
}

export default TodoApp;