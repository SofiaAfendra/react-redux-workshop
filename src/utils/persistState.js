import { useState, useEffect } from 'react';

export const usePersistStateHook = (key, initState = null) => {
  const [persistedState, setPersistedState] = useState(
    JSON.parse(localStorage.getItem(key)) || initState,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedState));
  }, [persistedState, key]);

  const handlePersistedState = (newState) => {
    setPersistedState({
      ...persistedState,
      ...newState,
    });
  };

  handlePersistedState.reset = () => {
    setPersistedState(initState);
  };

  return {
    persistedState,
    setPersistedState: handlePersistedState,
  };
};
