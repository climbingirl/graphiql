import { configureStore } from '@reduxjs/toolkit';
import playgroundSliceReducer from './playgroundSlice/playgroundSlice';

export const store = configureStore({
  reducer: {
    playground: playgroundSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['playground/getApiShema/fulfilled'],
        ignoredPaths: ['playground.apiSchema'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
