import { ReactElement } from 'react';

export interface AuthContextProps {
  children: ReactElement;
}

export interface AuthContextValue {
  userToken: string | null;
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (newToken: string, cb: () => void) => void;
  signOut: (cb: () => void) => void;
}
