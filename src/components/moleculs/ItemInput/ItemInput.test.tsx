import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import ItemInput from './ItemInput.tsx';
import { RootState } from '../../../store/store.ts';
import { Filters } from '../../../types/Filters.ts';

const testProps = {
  id: 1,
  text: 'Test Input Text',
  className: 'item-input-class',
};

const initialState: RootState = {
    filter: Filters.All,
    todoList: []
};
const mockStore = configureStore<RootState>();

describe('ItemInput component', () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly with input and save button', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <ItemInput {...testProps} />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('Input text here');
    const saveButton = getByText('Save');

    expect(inputElement).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it('dispatches setIsInput and additem actions when save button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ItemInput {...testProps} />
      </Provider>,
    );

    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    const expectedActions = [
      { type: 'todoList/setIsInput', payload: { id: testProps.id, value: false } },
      { type: 'todoList/additem' },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});