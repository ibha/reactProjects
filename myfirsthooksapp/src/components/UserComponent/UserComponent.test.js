import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserComponent from './UserComponent';

describe('<UserComponent />', () => {
  test('it should mount', () => {
    render(<UserComponent />);
    
    const userComponent = screen.getByTestId('UserComponent');

    expect(userComponent).toBeInTheDocument();
  });
});