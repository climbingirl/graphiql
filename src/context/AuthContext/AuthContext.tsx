import { createContext, useState } from 'react';
import { AuthContextValue, AuthContextProps } from './AuthContext.interface';

export const AuthContext = createContext<AuthContextValue>(null!);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [userToken, setUserToken] = useState<string | null>(
    localStorage.getItem('refreshToken')
  );

  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const signIn = (newToken: string, cb: () => void) => {
    setUserToken(newToken);
    cb();
    setIsSignIn(true);
  };

  const signOut = (cb: () => void) => {
    setUserToken(null);
    cb();
  };

  const value = { userToken, isSignIn, setIsSignIn, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
