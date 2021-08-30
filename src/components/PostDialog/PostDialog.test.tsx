import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostDialog from './PostDialog';

describe('<PostDialog />', () => {
  test('it should mount', () => {
    render(<PostDialog />);
    
    const postDialog = screen.getByTestId('PostDialog');

    expect(postDialog).toBeInTheDocument();
  });
});