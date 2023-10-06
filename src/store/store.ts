import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './slices/filterSlice.ts'
import { todoListReducer } from './slices/todoListSlice.ts';
import { localStorageMiddleware, persistedState } from './middlewares/localStorageMiddleware.ts';

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