import { useEffect, useReducer } from 'react';
import { usePersistState } from 'libraries';
import { initialState, gameReducer } from 'models';
import { config } from 'config';
import { Provider } from './store';

export const GameStateProvider = ({ children }) => {
  const { persistedState, setPersistedState } = usePersistState(
    config.PERSIST_KEY,
    initialState,
  );

  const [state, dispatch] = useReducer(gameReducer, persistedState);

  useEffect(() => {
    setPersistedState(state);
  }, [state, setPersistedState]);

  const value = {
    state,
    dispatch,
  };

  return <Provider value={value}>{children}</Provider>;
};
