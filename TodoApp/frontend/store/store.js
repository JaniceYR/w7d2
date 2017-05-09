import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import {receiveTodos, receiveTodo} from "../actions/todo_actions";
import {applyMiddleware} from 'redux';
import {toDoThunk} from '../middleware/thunk.js';

const configureStore = () => (
  createStore(rootReducer, applyMiddleware(toDoThunk))
);


export default configureStore;
