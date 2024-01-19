import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUpPage from './SignUp';

jest.mock('../../hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      out: 'Sign Out',
      in: 'Sign In',
      up: 'Sign Up',
    },
  })),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuth: jest.fn(() => ({ userToken: 'mockedToken' })),
}));

describe('SignUpPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SignUpPage correctly', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );

    waitFor(() => {
      const signUpPage = screen.getByTestId('signup-page');
      expect(signUpPage).toBeTruthy();
    });
  });

  it('navigates to Sign In page when "Sign In" link is clicked', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );

    waitFor(() => {
      const signInLink = screen.getByRole('link', { name: /sign in/i });
      expect(signInLink).toBeTruthy();
      fireEvent.click(signInLink);
    });

    waitFor(() => {
      expect(screen.getByTestId('signin-page')).toBeTruthy();
    });
  });
});
