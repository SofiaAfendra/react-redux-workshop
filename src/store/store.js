import { configureStore } from '@reduxjs/toolkit';
import { testAction, testReducer } from 'models';

export const store = configureStore({
  reducer: testReducer,
});

console.log(store.getState());
store.dispatch(testAction());
console.log(store.getState());
