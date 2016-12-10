// Actions creators for To Do

// Required libraries

// Required files
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};

export const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        index
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
};
