import {
    setText,
    setIsInput,
    setIsDone,
    remove,
    additem,
    removeCompleted,
    todoListReducer,
  } from './todoListSlice';
  import { FieldData } from '../../types/FieldData';
  import { SetTextAction } from '../../types/actions/SetTextAction';
  import { SetBooleanAction } from '../../types/actions/SetBooleanAction';
  import { BaseAction } from '../../types/actions/BaseAction';
  
  describe('todoListSlice', () => {
    it('should handle setText action', () => {
      const initialState: FieldData[] = [
        { id: 1, text: 'Item 1', isInput: true, isDone: false },
        { id: 2, text: 'Item 2', isInput: true, isDone: false },
      ];
  
      const setTextAction: SetTextAction = { id: 1, text: 'Updated Text' };
  
      const nextState = todoListReducer(initialState, setText(setTextAction));
  
      expect(nextState[0].text).toBe('Updated Text');
      expect(nextState[1].text).toBe('Item 2');
    });
  
    it('should handle setIsInput action', () => {
      const initialState: FieldData[] = [
        { id: 1, text: 'Item 1', isInput: true, isDone: false },
        { id: 2, text: 'Item 2', isInput: true, isDone: false },
      ];
  
      const setIsInputAction: SetBooleanAction = { id: 1, value: false };
  
      const nextState = todoListReducer(initialState, setIsInput(setIsInputAction));
  
      expect(nextState[0].isInput).toBe(false);
      expect(nextState[1].isInput).toBe(true);
    });
  
    it('should handle setIsDone action', () => {
      const initialState: FieldData[] = [
        { id: 1, text: 'Item 1', isInput: true, isDone: false },
        { id: 2, text: 'Item 2', isInput: true, isDone: false },
      ];
  
      const setIsDoneAction: SetBooleanAction = { id: 2, value: true };
  
      const nextState = todoListReducer(initialState, setIsDone(setIsDoneAction));
  
      expect(nextState[0].isDone).toBe(false);
      expect(nextState[1].isDone).toBe(true);
    });
  
    it('should handle remove action', () => {
      const initialState: FieldData[] = [
        { id: 1, text: 'Item 1', isInput: true, isDone: false },
        { id: 2, text: 'Item 2', isInput: true, isDone: false },
      ];
  
      const removeAction: BaseAction = { id: 1 };
  
      const nextState = todoListReducer(initialState, remove(removeAction));
  
      expect(nextState.length).toBe(1);
      expect(nextState[0].id).toBe(2);
    });
  
    it('should handle additem action', () => {
      const initialState: FieldData[] = [
        { id: 1, text: 'Item 1', isInput: true, isDone: false },
      ];
  
      const nextState = todoListReducer(initialState, additem());
  
      expect(nextState.length).toBe(2);
      expect(nextState[1].id).toBe(2);
    });
  
    it('should handle removeCompleted action', () => {
      const initialState: FieldData[] = [
        { id: 1, text: 'Item 1', isInput: true, isDone: true },
        { id: 2, text: 'Item 2', isInput: true, isDone: false },
        { id: 3, text: 'Item 3', isInput: true, isDone: true },
      ];
  
      const nextState = todoListReducer(initialState, removeCompleted());
  
      expect(nextState.length).toBe(1);
      expect(nextState[0].id).toBe(2);
    });
  });