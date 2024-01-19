import { act, renderHook } from '@testing-library/react';
import { AuthProvider } from './AuthContext';
import { useAuth } from '@src/hooks/useAuth';

describe('AuthProvider', () => {
  it('sets initial userToken to null', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.userToken).toBeNull();
  });

  it('signIn function sets userToken', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const newToken = 'mockToken';
    act(() => {
      result.current.signIn(newToken, jest.fn());
    });

    expect(result.current.userToken).toEqual(newToken);
  });

  it('signOut function sets userToken to null', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut(jest.fn());
    });

    expect(result.current.userToken).toBeNull();
  });
});
