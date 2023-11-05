import { createContext, useEffect, useReducer } from 'react';
import { usePersistState } from '@/libraries';
import { initialState, reducer } from './reducer';
import { config } from '@/config/config';

export const gameState = createContext({});

const { Provider } = gameState;

export const GameStateProvider = ({ children }) => {
  const { persistedState, setPersistedState } = usePersistState(
    config.PERSIST_KEY,
    initialState,
  );

  const [state, dispatch] = useReducer(reducer, persistedState);

  useEffect(() => {
    setPersistedState(state);
  }, [state, setPersistedState]);

  const value = {
    state,
    dispatch,
  };

  return <Provider value={value}>{children}</Provider>;
};
