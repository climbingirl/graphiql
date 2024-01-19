import { render, screen, waitFor } from '@testing-library/react';
import RequireAuth from './RequireAuth';
import { MemoryRouter } from 'react-router-dom';
import ROUTES from '../../router/routes';
import { AuthProvider } from '@src/context/AuthContext/AuthContext';

jest.mock('../../hooks/useAuth');

describe('RequireAuth Component', () => {
  it('redirects to signin page when user is not auth', () => {
    require('../../hooks/useAuth').useAuth.mockImplementation(() => ({
      userToken: null,
    }));

    render(
      <MemoryRouter initialEntries={[ROUTES.ROOT]}>
        <AuthProvider>
          <RequireAuth>
            <div>Child Component</div>
          </RequireAuth>
        </AuthProvider>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('Child Component')).toBeNull();
    });
  });

  it('redirects to signin page when user is auth', () => {
    require('../../hooks/useAuth').useAuth.mockImplementation(() => ({
      userToken: 'mockedToken',
    }));

    render(
      <MemoryRouter initialEntries={[ROUTES.ROOT]}>
        <AuthProvider>
          <RequireAuth>
            <div>Child Component</div>
          </RequireAuth>
        </AuthProvider>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('Child Component')).toBeTruthy();
    });
  });
});
