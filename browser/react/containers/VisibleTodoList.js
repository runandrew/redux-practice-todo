// Visible Todo List

import { connect } from 'react-redux';
import { toggleTodo } from '../action-creators/todo';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);

        default: return todos;

    }
};
