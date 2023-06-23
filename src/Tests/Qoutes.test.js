import { render } from '@testing-library/react';
import Quotes from '../Routes/displayQoute';

test('renders Quotes correctly', () => {
  const { container } = render(<Quotes />);
  expect(container).toMatchSnapshot();
});
