import { configureStore } from '@reduxjs/toolkit';
import { initialState, setPlayer1, setPlayer2 } from '../models';
import rootReducer from './rootReducer';

export const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
});

store.dispatch(setPlayer1('test player 1'));
store.dispatch(setPlayer2('test player 2'));

//! bug it seems that it's not working properly
