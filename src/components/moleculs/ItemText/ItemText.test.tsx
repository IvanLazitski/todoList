import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import ItemText from './ItemText';
import { RootState } from '../../../store/store';
import { Filters } from '../../../types/Filters';

const testProps = {
  id: 1,
  text: 'Test Item Text',
  buttonText: 'Remove',
  className: 'item-text-class',
  isDone: false,
};

const initialState: RootState = {
    filter: Filters.All,
    todoList: [],
};
const mockStore = configureStore<RootState>();

describe('ItemText component', () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly with radio button, text, and remove button', () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <ItemText {...testProps} />
      </Provider>,
    );

    const radioButtonText = container.querySelector('input[type="radio"]');
    const removeButton = getByText(testProps.buttonText);

    expect(radioButtonText).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  it('dispatches setIsDone action when radio button is clicked', () => {
    const { container } = render(
      <Provider store={store}>
        <ItemText {...testProps} />
      </Provider>,
    );

    const radioButton = container.querySelector('input[type="radio"]');
    expect(radioButton).toBeInTheDocument();
    if (radioButton)
      fireEvent.click(radioButton);

    const expectedAction = { type: 'todoList/setIsDone', payload: { id: testProps.id, value: true } };
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('dispatches remove action when remove button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ItemText {...testProps} />
      </Provider>,
    );

    const removeButton = getByText(testProps.buttonText);
    fireEvent.click(removeButton);

    const expectedAction = { type: 'todoList/remove', payload: { id: testProps.id } };
    expect(store.getActions()).toEqual([expectedAction]);
  });
});