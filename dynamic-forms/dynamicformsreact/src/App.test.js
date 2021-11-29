import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const form = container.querySelector('form');
  expect(form).toBeInTheDocument();
  const countryLabel = screen.getByLabelText('Country');
  expect(countryLabel).toBeInTheDocument();
});
