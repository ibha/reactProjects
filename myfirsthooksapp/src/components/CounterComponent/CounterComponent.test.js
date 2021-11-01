import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterComponent from './CounterComponent';

describe('<CounterComponent />', () => {
  test('it should mount', () => {
    render(<CounterComponent />);
    
    const counterComponent = screen.getByTestId('CounterComponent');

    expect(counterComponent).toBeInTheDocument();
  });
});