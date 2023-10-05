import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoList from './TodoList';
import { Filters } from '../../types/Filters';

const testProps = {
  todoList: [
    {
      id: 1,
      text: 'Test Item 1',
      isInput: true,
      isDone: false,
    },
    {
      id: 2,
      text: 'Test Item 2',
      isInput: false,
      isDone: true,
    },
  ],
  className: 'todo-list-class',
};

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
      isInput: true,
      isDone: false,
    },
  ],
};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('TodoList component', () => {
  it('renders todoList items correctly', () => {
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <TodoList {...testProps} />
      </Provider>,
    );

    const item1 = queryByText('Test Item 1');
    const item2 = getByText('Test Item 2');

    expect(item1).not.toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it('reverses the order of rendered todoList items', () => {
    const { container } = render(
      <Provider store={store}>
        <TodoList {...testProps} />
      </Provider>,
    );
    const items = container.querySelectorAll('.item');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Test Item 2');
    expect(items[1]).not.toHaveTextContent('Test Item 1');
  });
});