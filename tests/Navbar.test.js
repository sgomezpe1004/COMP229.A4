// tests/Navbar.test.js
import React from 'react'; 
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../components/Layout'; 

describe('Navbar Component', () => {
  test('renders all main links', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    
    const linkLabels = ['Home', 'Resume', 'Education', 'Projects', 'Services', 'Contact'];

    linkLabels.forEach(label => {
      const link = screen.getByRole('link', { name: label });
      expect(link).toBeInTheDocument();
    });
  });
});
