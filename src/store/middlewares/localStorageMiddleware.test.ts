import { configureStore } from '@reduxjs/toolkit';
import {
  localStorageMiddleware,
  persistedState,
} from './localStorageMiddleware';
import { filterReducer, changeFilter } from '../slices/filterSlice';
import { todoListReducer } from '../slices/todoListSlice';
import { Filters } from '../../types/Filters';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    todoList: todoListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware),
  preloadedState: persistedState,
});

describe('localStorageMiddleware', () => {
  let localStorageMock: Storage;
  let originalLocalStorage: Storage;

  beforeEach(() => {
    originalLocalStorage = global.localStorage as Storage;
    localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        length: 0,
        clear: jest.fn(),
        key: jest.fn(),
        removeItem: jest.fn(),
      };

    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
  });

  afterEach(() => {
    Object.defineProperty(global, 'localStorage', {
      value: originalLocalStorage,
    });
  });

  it('saves state to localStorage when an action is dispatched', () => {
    store.dispatch(changeFilter(Filters.Active));

    expect(localStorageMock.setItem).toHaveBeenCalledWith('reduxState', JSON.stringify(store.getState()));
  });
});