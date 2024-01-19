import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      activeLang: 'en',
      headerLinks: {
        '/': 'GraphiQL',
      },
      sign: {
        out: 'Sign Out',
      },
    },
  })),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuth: jest.fn(() => ({ userToken: 'mockedToken' })),
}));

describe('Header component with token', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('header')).toBeTruthy();
  });

  it('hides header on 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.queryByTestId('header')).not.toBeTruthy();
  });

  it('changes header style on scroll', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId('header');

    expect(header.classList.contains('header_scrolling')).toBe(false);

    fireEvent.scroll(window, { target: { scrollY: 20 } });

    waitFor(() => {
      expect(header.classList.contains('header_scrolling')).toBe(true);
    });

    fireEvent.scroll(window, { target: { scrollY: 0 } });
    waitFor(() => {
      expect(header.classList.contains('header_scrolling')).toBe(false);
    });
  });
});
