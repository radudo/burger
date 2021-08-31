import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostDialog from './PostDialog';
import { BPost } from '../../models/BPost';

describe('<PostDialog />', () => {
  let user : BPost;
  test('it should mount', () => {
    render(<PostDialog {...user}/>);
    
    const postDialog = screen.getByTestId('PostDialog');

    expect(postDialog).toBeInTheDocument();
  });
});