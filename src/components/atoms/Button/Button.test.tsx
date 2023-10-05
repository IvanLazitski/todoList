import { render, fireEvent } from '@testing-library/react';
import Button from './Button';


const mockOnClick = jest.fn();
const testProps = {
  text: 'Submit',
  onClick: mockOnClick,
};

test('it renders a button with the correct text and handles click', () => {
  const { getByText } = render(<Button {...testProps} />);

  fireEvent.click(getByText('Submit'));

  expect(getByText('Submit')).toBeInTheDocument();
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});