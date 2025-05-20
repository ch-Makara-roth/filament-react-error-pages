/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from '../components/errors/NotFound';

describe('NotFound Component', () => {
  it('renders correctly', () => {
    render(<NotFound />);
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});