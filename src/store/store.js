import { configureStore } from '@reduxjs/toolkit';
import { initialState } from '../models';
import rootReducer from './rootReducer';

export const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
});
