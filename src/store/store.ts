import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './slices/filterSlice'
import { todoListReducer } from './slices/todoListSlice';
import { localStorageMiddleware, persistedState } from './middlewares/localStorageMiddleware';

export const store = configureStore({
    reducer: {
      filter: filterReducer,
      todoList: todoListReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(localStorageMiddleware),
    preloadedState: persistedState
});

export type RootState = ReturnType<typeof store.getState>;