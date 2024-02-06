import ReactDOM from 'react-dom/client';
import { Game } from 'components';
import { StateProvider } from 'store';
import { config } from 'config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider persistKey={config.PERSIST_KEY}>
    <Game />
  </StateProvider>,
);
