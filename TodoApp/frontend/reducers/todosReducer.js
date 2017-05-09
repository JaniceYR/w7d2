import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, receiveTodos, receiveTodo, fetchTodos} from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = Object.assign({}, state);
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      let newObject = {};
      newObject[action.todo.id] = action.todo;
      return Object.assign(newObject, state);
    case REMOVE_TODO:
      let removeState = Object.assign({}, state);
      delete removeState[action.todo.id];
      return removeState;
    default:
      return state;
  }
};

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

export default todosReducer;
