import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../Components/Layout';

test('renders Layout correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});