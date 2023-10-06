import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoListApp from './TodoListApp.tsx';
import { Filters } from '../../types/Filters.ts';
import { RootState } from '../../store/store.ts';

const initialState = {
  filter: Filters.All,
  todoList: [
    {
      id: 1,
      text: 'Test Item 1',
      isInput: false,
      isDone: false,
    },
    {
      id: 2,
      text: 'Test Item 2',
      isInput: false,
      isDone: true,
    },
    {
      id: 3,
      text: 'Test Item 3',
      isInput: true,
      isDone: false,
    }
  ],
};

const mockStore = configureStore<RootState>();

describe('TodoListApp component', () => {
  it('renders the TodoListApp component with correct items based on filter', () => {
    const store = mockStore(initialState);

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <TodoListApp />
      </Provider>,
    );

    const item1 = getByText('Test Item 1');
    const item2 = getByText('Test Item 2');
    const item3 = queryByText('Test Item 3');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).not.toBeInTheDocument();
    
    store.dispatch({ type: 'filter/changeFilter', payload: Filters.Active });

    const item1AfterFilter = getByText('Test Item 1');
    const item2AfterFilter = getByText('Test Item 2');
    const item3AfterFilter = queryByText('Test Item 3');

    expect(item1AfterFilter).toBeInTheDocument();
    expect(item2AfterFilter).not.toBeInTheDocument();
    expect(item3AfterFilter).not.toBeInTheDocument();

    store.dispatch({ type: 'filter/changeFilter', payload: Filters.Completed });

    const item1AfterFilter2 = queryByText('Test Item 1');
    const item2AfterFilter2 = queryByText('Test Item 2');
    const item3AfterFilter2 = queryByText('Test Item 3');

    expect(item1AfterFilter2).not.toBeInTheDocument();
    expect(item2AfterFilter2).toBeInTheDocument(); 
    expect(item3AfterFilter2).not.toBeInTheDocument();
  });
});