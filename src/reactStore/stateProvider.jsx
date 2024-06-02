import { useEffect, useReducer } from 'react';
import { usePersistState } from 'libraries';
import { gameReducer } from 'models';
import { Provider } from './store';

//Note: we provide a initialState so we don't cause an error. this file must be deleted!
const initialState = {};

export const StateProvider = ({ persistKey, children }) => {
  const { persistedState, setPersistedState } = usePersistState(
    persistKey,
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
