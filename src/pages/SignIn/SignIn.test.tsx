import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignInPage from './SignIn';

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

describe('SignInPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SignInPage correctly', () => {
    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>
    );

    waitFor(() => {
      const signInPage = screen.getByTestId('signin-page');
      expect(signInPage).toBeTruthy();
    });
  });

  it('navigates to Sign Up page when "Sign Up" link is clicked', () => {
    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>
    );

    waitFor(() => {
      const signUpLink = screen.getByRole('link', { name: /sign up/i });
      fireEvent.click(signUpLink);
    });

    waitFor(() => {
      const signUpPage = screen.getByTestId('signup-page');
      expect(signUpPage).toBeTruthy();
    });
  });
});
