import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostDialog from './PostDialog';
import { BPost } from '../../models/BPost';

describe('<PostDialog />', () => {
  test('it should mount', () => {
    let user : BPost;
    render(<PostDialog {...user} />);
    
    const postDialog = screen.getByTestId('PostDialog');

    expect(postDialog).toBeInTheDocument();
  });
});