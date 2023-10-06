import { render } from '@testing-library/react';
import Text from './Text.tsx';

describe('Text component', () => {
  it('renders text correctly', () => {
    const text = 'Hello, world!';
    const { getByText } = render(<Text text={text} />);
    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it('renders with optional className', () => {
    const text = 'Styled Text';
    const className = 'custom-class';
    const { getByText } = render(<Text text={text} className={className} />);
    const textElement = getByText(text);
    expect(textElement).toHaveClass(className);
  });
});