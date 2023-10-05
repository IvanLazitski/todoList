import { changeFilter, filterReducer } from './filterSlice';
import { Filters } from '../../types/Filters';

describe('filterSlice', () => {
  it('should return the initial state', () => {
    const initialState = Filters.All;
    const nextState = filterReducer(undefined, {} as any);

    expect(nextState).toEqual(initialState);
  });

  it('should handle the changeFilter action', () => {
    const initialState = Filters.All;
    const nextState = filterReducer(initialState, changeFilter(Filters.Active));

    expect(nextState).toEqual(Filters.Active);
  });

  it('should handle the changeFilter action with another filter value', () => {
    const initialState = Filters.Active;
    const nextState = filterReducer(initialState, changeFilter(Filters.Completed));

    expect(nextState).toEqual(Filters.Completed);
  });

  it('should handle the changeFilter action with "All" filter', () => {
    const initialState = Filters.Completed;
    const nextState = filterReducer(initialState, changeFilter(Filters.All));

    expect(nextState).toEqual(Filters.All);
  });
});