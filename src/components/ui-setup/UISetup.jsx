import { Provider } from 'react-redux';
import { store } from '../../store';
import { StateProvider } from '../../reactStore';
import { config } from '../../config';

export const UISetup = ({ children }) => (
  <StateProvider persistKey={config.PERSIST_KEY}>
    <Provider store={store}>{children}</Provider>
  </StateProvider>
);
