// Run app without UI

// Required files
import store from './browser/react/store';
import { addTodo, toggleTodo, setVisibilityFilter } from './browser/react/action-creators/todo';
import { VisibilityFilters } from './browser/react/constants';

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTodo('My first todo'));
store.dispatch(addTodo('My second todo'));

store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
