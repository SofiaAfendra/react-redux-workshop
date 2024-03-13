import { configureStore } from '@reduxjs/toolkit';
import { initialTestState, testAction, testReducer } from '../models';

export const store = configureStore({
  preloadedState: initialTestState,
  reducer: testReducer,
});

store.dispatch(testAction());
