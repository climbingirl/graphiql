import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Sign out with token
export const signOutUser = async (): Promise<void> => {
  signOut(auth).catch((error: Error): Error => {
    return error;
  });
};
