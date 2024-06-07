import { useEffect, useReducer } from 'react';
import { usePersistState } from 'libraries';
import { gameReactReducer, initialState } from 'models';
import { Provider } from './store';

export const StateProvider = ({ persistKey, children }) => {
  const { persistedState, setPersistedState } = usePersistState(
    persistKey,
    initialState,
  );

  const [state, dispatch] = useReducer(gameReactReducer, persistedState);

  useEffect(() => {
    setPersistedState(state);
  }, [state, setPersistedState]);

  const value = {
    state,
    dispatch,
  };

  return <Provider value={value}>{children}</Provider>;
};
