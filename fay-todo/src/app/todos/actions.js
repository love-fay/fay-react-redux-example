/**
 * Created by feichongzheng on 17/9/25.
 */
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});