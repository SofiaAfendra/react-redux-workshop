import { configureStore } from '@reduxjs/toolkit';
import { initialTestState, testReducer } from '../models';

export const store = configureStore({
  preloadedState: initialTestState,
  reducer: testReducer,
});
