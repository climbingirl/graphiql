import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      activeLang: 'en',
      form: {
        emailLabel: 'Email',
        passwordLabel: 'Password',
        submitButton: 'Submit',
      },
    },
  })),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuth: jest.fn(() => ({ userToken: 'mockedToken' })),
}));

describe('RegistrationForm', () => {
  it('renders RegistrationForm correctly', () => {
    render(<RegistrationForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    waitFor(() => {
      expect(emailInput).toBeTruthy();
      expect(passwordInput).toBeTruthy();
      expect(submitButton).toBeTruthy();
    });
  });

  it('displays Loader when loading is true', () => {
    const mockUseSignInWithEmailAndPassword = jest.fn();
    mockUseSignInWithEmailAndPassword.mockReturnValue([
      jest.fn(),
      undefined,
      true,
    ]);
    jest.mock('react-firebase-hooks/auth', () => ({
      ...jest.requireActual('react-firebase-hooks/auth'),
      useSignInWithEmailAndPassword: mockUseSignInWithEmailAndPassword,
    }));

    render(<RegistrationForm />);

    waitFor(() => {
      const loader = screen.getByTestId('loader');
      expect(loader).toBeTruthy();
      expect(screen.queryByRole('form')).toBeNull();
    });
  });

  it('calls createUserWithEmailAndPassword and signInWithEmailAndPassword with correct data on form submission', async () => {
    const mockCreateUserWithEmailAndPassword = jest.fn();
    const mockSignInWithEmailAndPassword = jest.fn();
    mockCreateUserWithEmailAndPassword.mockReturnValue([
      mockCreateUserWithEmailAndPassword,
      undefined,
      false,
    ]);
    mockCreateUserWithEmailAndPassword.mockReturnValue([
      mockSignInWithEmailAndPassword,
      undefined,
      false,
    ]);

    render(<RegistrationForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    waitFor(() => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
    });

    waitFor(() => {
      fireEvent.submit(submitButton);
    });

    waitFor(() => {
      expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
        'test@example.com',
        'password123'
      );
      expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(
        'test@example.com',
        'password123'
      );
    });
  });
});
