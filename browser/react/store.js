// Redux store

// Required libraries
import { createStore } from 'redux';

// Required files
import todoApp from './reducers/todo.reducer';

const store = createStore(todoApp);

export default store;
