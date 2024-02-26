import { configureStore } from '@reduxjs/toolkit';
import { initialTestState, testAction, testReducer } from '../models';

export const store = configureStore({
  preloadedState: initialTestState,
  reducer: { test: testReducer },
});

store.dispatch(testAction());
