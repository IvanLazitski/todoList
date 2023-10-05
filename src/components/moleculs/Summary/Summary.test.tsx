import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Summary from './Summary';
import { Filters } from '../../../types/Filters';
import { changeFilter } from '../../../store/slices/filterSlice';
import { removeCompleted } from '../../../store/slices/todoListSlice';
import { RootState } from '../../../store/store';
import { SummaryProps } from '../../../types/props/SummaryProps';

const testProps : SummaryProps = {
  text: 'Test Summary',
  className: 'summary-class',
  filter: Filters.All
};

const initialState: RootState = {
  filter: Filters.All,
  todoList: [],
};
const mockStore = configureStore<RootState>();

describe('Summary component', () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly with text and buttons', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Summary {...testProps} />
      </Provider>,
    );

    const textElement = getByText(testProps.text);
    expect(textElement).toBeInTheDocument();

    const allButton = getByText(Filters.All);
    const activeButton = getByText(Filters.Active);
    const completedButton = getByText(Filters.Completed);
    const clearCompletedButton = getByText('Clear Completed');

    expect(allButton).toBeInTheDocument();
    expect(activeButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
    expect(clearCompletedButton).toBeInTheDocument();
  });

  it('dispatches changeFilter action when filter buttons are clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Summary {...testProps} />
      </Provider>,
    );

    const allButton = getByText(Filters.All);
    const activeButton = getByText(Filters.Active);
    const completedButton = getByText(Filters.Completed);

    fireEvent.click(allButton);
    fireEvent.click(activeButton);
    fireEvent.click(completedButton);

    const expectedActions = [changeFilter(Filters.All), changeFilter(Filters.Active), changeFilter(Filters.Completed)];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches removeCompleted action when "Clear Completed" button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Summary {...testProps} />
      </Provider>,
    );

    const clearCompletedButton = getByText('Clear Completed');
    fireEvent.click(clearCompletedButton);

    const expectedAction = removeCompleted();
    expect(store.getActions()).toEqual([expectedAction]);
  });
});