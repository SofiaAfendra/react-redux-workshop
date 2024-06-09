import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

/* TODO:
- At store.js make a function "makeStore" which will run the persistState function and will return the configureStore.
*/

export const store = configureStore({ reducer: rootReducer });
