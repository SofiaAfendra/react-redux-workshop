import { useState, useEffect } from 'react';
import { config } from 'config';

export const usePersistState = (initialState) => {
  const [persisteState, setPersisteState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(persisteState));
  }, [persisteState]);

  return [persisteState, setPersisteState];
};
