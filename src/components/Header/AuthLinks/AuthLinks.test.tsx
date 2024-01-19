import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthLinks, { AuthLink } from './AuthLinks';
import ROUTES from '../../../router/routes';

jest.mock('../../../hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    activeLang: 'en',
    setActiveLang: jest.fn(),
    localizationData: {
      sign: {
        in: 'Sign In',
        up: 'Sign Up',
      },
    },
  })),
}));

describe('AuthLinks Component', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <AuthLinks />
      </MemoryRouter>
    );
    expect(screen.getByText('Sign In')).toBeTruthy();
    expect(screen.getByText('Sign Up')).toBeTruthy();
  });

  it('contains two AuthLink components', () => {
    render(
      <MemoryRouter>
        <AuthLinks />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});

describe('AuthLink Component', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <AuthLink to={ROUTES.SIGNIN} type="white">
          Sign In
        </AuthLink>
      </MemoryRouter>
    );
    expect(screen.getByText('Sign In')).toBeTruthy();
  });

  it('applies active class when isActive is true', () => {
    const initialEntries = ['/signin'];

    render(
      <MemoryRouter initialEntries={initialEntries} basename="/">
        <AuthLink to={ROUTES.SIGNIN} type="white">
          Sign In
        </AuthLink>
      </MemoryRouter>
    );

    expect(screen.getByText('Sign In')).toBeTruthy();
    const signInElement = screen.getByText('Sign In');

    waitFor(() => {
      expect(signInElement.classList.contains('active')).toBe(true);
    });
  });

  it('does not apply active class when isActive is false', () => {
    const initialEntries = ['/signup'];

    render(
      <MemoryRouter initialEntries={initialEntries} basename="/">
        <AuthLink to={ROUTES.SIGNIN} type="white">
          Sign In
        </AuthLink>
      </MemoryRouter>
    );

    expect(screen.getByText('Sign In')).toBeTruthy();
    const signInElement = screen.getByText('Sign In');

    waitFor(() => {
      expect(signInElement.classList.contains('active')).toBe(false);
    });
  });
});
