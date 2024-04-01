import { configureStore } from '@reduxjs/toolkit';
import { config } from 'config';
import { persistState } from 'libraries';
import rootReducer from './rootReducer';

/**
 * Make store
 * @description Make store with rootReducer and persistStateMiddleware
 *
 * @param {string} persistKey - key for localStorage
 * @returns {object} store - store
 *
 */
export const makeStore = (persistKey) => {
  const { initialsState, persistStateMiddleware } = persistState(persistKey);

  return configureStore({
    preloadedState: { ...initialsState },
    reducer: rootReducer,
    middleware: (prev) => prev().concat(persistStateMiddleware),
  });
};

export const store = makeStore(config.PERSIST_KEY);