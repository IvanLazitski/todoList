import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '../../types/Filters.ts'

export const filterInitialState = Filters.All;

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter: (state: Filters, action: PayloadAction<Filters>) => {
            return action.payload;
        }
    }
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;