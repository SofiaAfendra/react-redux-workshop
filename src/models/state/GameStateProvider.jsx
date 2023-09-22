import { createContext, useEffect, useReducer } from 'react';
import { usePersistState } from '@/models';
import { initialState, reducer } from './reducer';

export const gameState = createContext({});

const { Provider } = gameState;

export const GameStateProvider = ({ children }) => {
  const { persistedState, setPersistedState } = usePersistState(
    'tic-tac-toe',
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
