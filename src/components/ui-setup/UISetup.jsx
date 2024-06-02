import { Provider } from 'react-redux';
import { store } from 'store';

export const UISetup = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
