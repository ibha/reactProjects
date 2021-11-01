import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoComponent from './TodoComponent';

describe('<TodoComponent />', () => {
  test('it should mount', () => {
    render(<TodoComponent />);
    
    const todoComponent = screen.getByTestId('TodoComponent');

    expect(todoComponent).toBeInTheDocument();
  });
});