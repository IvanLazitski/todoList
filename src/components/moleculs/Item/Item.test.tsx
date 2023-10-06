import { render } from '@testing-library/react';
import Item from './Item.tsx';

jest.mock('../ItemInput/ItemInput', () => ({ __esModule: true, default: () => <div>Mocked ItemInput</div> }));
jest.mock('../ItemText/ItemText', () => ({ __esModule: true, default: () => <div>Mocked ItemText</div> }));

const testProps = {
  id: 1,
  text: 'Test Item Text',
  isInput: false,
  isDone: false,
};

describe('Item component', () => {
  it('renders ItemInput when isInput is true', () => {
    const props = { ...testProps, isInput: true };
    const { getByText } = render(<Item {...props} />);

    const itemInput = getByText('Mocked ItemInput');
    expect(itemInput).toBeInTheDocument();
  });

  it('renders ItemText when isInput is false', () => {
    const { getByText } = render(<Item {...testProps} />);

    const itemText = getByText('Mocked ItemText');
    expect(itemText).toBeInTheDocument();
  });
});