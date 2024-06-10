import React from 'react';
import { render, screen } from '@testing-library/react';
import { Routes } from 'src/routes';

test('renders learn react link', () => {
  render(<Routes />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});
