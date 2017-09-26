/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';
import {selectVisibleTodos} from '../selector';

let currentTodo = [];

const TodoList = ({
    todos
}) => {
    currentTodo = todos;
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                    />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    const newTodos = selectVisibleTodos(state);
    if(newTodos.toString() === currentTodo.toString()) {
        console.log('返回原来的todos');
        return {
            todos: currentTodo
        };
    }
    console.log('返回新的todos');
    return {
        todos: newTodos
    };
};


export default connect(mapStateToProps, null)(TodoList);