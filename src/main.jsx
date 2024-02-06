import ReactDOM from 'react-dom/client';
import { Game } from 'components';
import { GameStateProvider } from 'store';
import { config } from 'config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameStateProvider persistKey={config.PERSIST_KEY}>
    <Game />
  </GameStateProvider>,
);
