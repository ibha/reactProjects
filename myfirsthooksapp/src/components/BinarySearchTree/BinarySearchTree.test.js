import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BinarySearchTree from './BinarySearchTree';

describe('<BinarySearchTree />', () => {
  test('it should mount', () => {
    render(<BinarySearchTree />);
    
    const binarySearchTree = screen.getByTestId('BinarySearchTree');

    expect(binarySearchTree).toBeInTheDocument();
  });
});