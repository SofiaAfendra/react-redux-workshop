import { configureStore } from '@reduxjs/toolkit';
import { initialTestState, testAction, testReducer } from '../models';

const preloadedState = {
  test: initialTestState,
};
export const store = configureStore({
  preloadedState,
  reducer: testReducer,
});

console.log(store.getState());
store.dispatch(testAction());
console.log(store.getState());
