import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Input from './Input.tsx';
import { setText } from '../../../store/slices/todoListSlice.ts';
import { RootState } from '../../../store/store.ts';
import { AnyAction, Dispatch } from 'redux';
import { Filters } from '../../../types/Filters.ts';

const testProps = {
  id: 1,
};

const initialState: RootState = {
    filter: Filters.All,
    todoList: []
}

const mockStore = configureStore<RootState>();

describe('Input component', () => {
  let store: MockStoreEnhanced<RootState>;
  let useDispatchMock: jest.Mock<Dispatch<AnyAction>>;

  beforeEach(() => {
    store = mockStore(initialState);

    useDispatchMock = jest.fn();
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux')
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders an input field with a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input {...testProps} />
      </Provider>,
    );
    const inputElement = getByPlaceholderText('Input text here');
    expect(inputElement).toBeInTheDocument();
  });

  it('dispatches setText action when input changes', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input {...testProps} />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('Input text here');
    fireEvent.change(inputElement, { target: { value: 'New text' } });

    const actions = store.getActions();
    expect(actions).toEqual([setText({ id: testProps.id, text: 'New text' })]);
  });
});