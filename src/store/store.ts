import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './slices/filterSlice'
import { todoListReducer } from './slices/todoListSlice';

export const store = configureStore({
    reducer: {
      filter: filterReducer,
      todoList: todoListReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;