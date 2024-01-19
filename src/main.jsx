import ReactDOM from 'react-dom/client';
import { config } from 'config';


import { Game } from 'components';
import { GameStateProvider } from 'store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameStateProvider persistKey={config.PERSIST_KEY}>
    <Game />
  </GameStateProvider>,
);
