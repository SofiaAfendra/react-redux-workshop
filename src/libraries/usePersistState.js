import { useState, useEffect } from 'react';
import { config } from 'config';

export const usePersistState = (initialState) => {
  const [persistedState, setPersistedState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(persistedState));
  }, [persistedState]);

  return [persistedState, setPersistedState];
};
