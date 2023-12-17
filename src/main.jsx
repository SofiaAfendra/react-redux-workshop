import ReactDOM from 'react-dom/client';
import { Game } from 'components';
import { GameStateProvider } from 'store';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameStateProvider>
    <Game />
  </GameStateProvider>,
);
