import { Middleware } from 'redux';
import { filterInitialState } from '../slices/filterSlice'
import { initialTodoListState } from '../slices/todoListSlice';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem('reduxState', JSON.stringify(store.getState()));

  return result;
};

export const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '')
  : { filter: filterInitialState, todoList: initialTodoListState };