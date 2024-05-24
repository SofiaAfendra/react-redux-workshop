import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// export const store = configureStore({
//   preloadedState: initialState,
//   reducer: rootReducer,
// });
export const store = configureStore({ reducer: rootReducer });
