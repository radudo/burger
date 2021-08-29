import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostBox from './PostBox';

describe('<PostBox />', () => {
  test('it should mount', () => {
    render(<PostBox />);
    
    const postBox = screen.getByTestId('PostBox');

    expect(postBox).toBeInTheDocument();
  });
});