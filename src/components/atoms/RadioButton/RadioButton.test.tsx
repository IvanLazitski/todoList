import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  it('renders correctly with defaultChecked', () => {
    const props = {
      id: 1,
      isDone: true,
      onClick: jest.fn(),
    };
    const { container } = render(<RadioButton {...props} />);
    const radioButton = container.querySelector('input[type="radio"]');

    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveAttribute('type', 'radio');
    expect(radioButton).toHaveProperty('defaultChecked', true);
  });

  it('renders with optional className', () => {
    const props = {
      id: 2,
      isDone: false,
      className: 'custom-class',
      onClick: jest.fn(),
    };
    const { container } = render(<RadioButton {...props} />);
    const radioButton = container.querySelector('input[type="radio"]');

    expect(radioButton).toHaveClass(props.className);
  });

  it('calls onClick handler when clicked', () => {
    const props = {
      id: 3,
      isDone: false,
      onClick: jest.fn(),
    };
    const { container } = render(<RadioButton {...props} />);
    const radioButton = container.querySelector('input[type="radio"]');

    if (radioButton) {
      fireEvent.click(radioButton);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    } else {
      fail('Radio button not found in the rendered component');
    }
  });
});