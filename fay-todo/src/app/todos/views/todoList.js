/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterType} from '../../constants.js';
import TodoItem from './todoItem';

const TodoList = ({
    todos, onToggleTodo, onRemoveTodo
}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterType.ALL:
            return todos;
        case FilterType.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterType.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
};

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);