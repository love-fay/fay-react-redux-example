/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

import './style.css';

export default () => {
    return (
        <div className="todos">
            <AddTodo/>
            <TodoList/>
        </div>
    );
}