import { useState, useEffect } from 'react';

export const usePersistState = (key, initState = {}) => {
  const [persistedState, setPersistedState] = useState(
    JSON.parse(localStorage.getItem(key)) || initState,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedState));
  }, [persistedState, key]);

  return {
    persistedState,
    setPersistedState,
  };
};
