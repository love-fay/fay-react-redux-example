/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';
import {FilterType} from '../constants';


const getFilter = (state) => state.filter;

const getTodos = (state) => state.todos;

export const selectVisibleTodos = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
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
    }
);
