import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from './app/reducers';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
