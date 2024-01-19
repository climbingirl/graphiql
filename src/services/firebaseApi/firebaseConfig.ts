export const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}-FIZD-B74I3TCaDCY`,
  authDomain: `${import.meta.env.VITE_PROJECT_ID}.firebaseapp.com`,
  projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: `G-${import.meta.env.VITE_MEASUREMENT_ID}`,
} as const;
