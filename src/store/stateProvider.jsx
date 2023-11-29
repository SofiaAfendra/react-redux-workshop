import { useEffect, useReducer } from 'react';
import { usePersistState } from '@/libraries';
import { Provider } from './store';
import { initialState, gameReducer } from '@/models';

export const GameStateProvider = ({ children }) => {
  const { persistedState, setPersistedState } = usePersistState(
    'tic-tac-toe',
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
