import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getByText} = render(<App />);

  const button = getByText('Open Form');

  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(button).toHaveTextContent('Close Form');


});
