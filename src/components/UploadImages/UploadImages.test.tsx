import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {UploadImages} from './UploadImages';

describe('<UploadImages />', () => {
  test('it should mount', () => {
    render(<UploadImages />);
    
    const uploadImages = screen.getByTestId('UploadImages');

    expect(uploadImages).toBeInTheDocument();
  });
});