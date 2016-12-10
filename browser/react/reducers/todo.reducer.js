// Reducers for To Do list

// Required libraries
import { combineReducers } from 'redux';

// Required files
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../constants';

// Todos Reducer
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, {
                text: action.text,
                completed: false,
                id: action.id
            }];
        }
        case TOGGLE_TODO: {
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                } else {
                    return todo;
                }
            });
        }
        default: return state;
    }
};

// Visibility Filter reducer
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: {
            return action.filter;
        }

        default: return state;
    }
};

// Combiner
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;
