import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '../../types/SummaryData'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: Filters.All,
    reducers: {
        changeFilter: (state: Filters, action: PayloadAction<Filters>) => {
            return action.payload;
        }
    }
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;