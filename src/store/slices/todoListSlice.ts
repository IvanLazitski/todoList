import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FieldData } from '../../types/FieldData.ts';
import { SetTextAction } from '../../types/actions/SetTextAction.ts';
import { SetBooleanAction } from '../../types/actions/SetBooleanAction.ts';
import { BaseAction } from '../../types/actions/BaseAction.ts';

const initialFieldState: FieldData = { id: 0, text: '', isInput: true, isDone: false };

export const initialTodoListState: FieldData[] = [initialFieldState];

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialTodoListState,
    reducers: {
        setText: (state: FieldData[], action: PayloadAction<SetTextAction>) => {
            const row = state.find(x => x.id === action.payload.id);
            if (row) row.text = action.payload.text;
        },
        setIsInput: (state: FieldData[], action: PayloadAction<SetBooleanAction>) => {
            const row = state.find(x => x.id === action.payload.id);
            if (row) row.isInput = action.payload.value;
        },
        setIsDone: (state: FieldData[], action: PayloadAction<SetBooleanAction>) => {
            const row = state.find(x => x.id === action.payload.id);
            if (row) row.isDone = action.payload.value;
        },
        remove: (state: FieldData[], action: PayloadAction<BaseAction>) => {
            return state.filter(x => x.id !== action.payload.id);
        },
        additem: (state: FieldData[]) => {
            state.push({ id: state[state.length - 1].id + 1, text: '', isInput: true, isDone: false });
        },
        removeCompleted: (state: FieldData[]) => {
            return state.filter(x => !x.isDone);
        }
    }
});



export const { setText, setIsInput, setIsDone , remove, additem, removeCompleted } = todoListSlice.actions;

export const todoListReducer = todoListSlice.reducer;