import ReactDOM from 'react-dom/client';
import { Game } from 'components';
import { GameStateProvider } from 'utils/contextProvider';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameStateProvider persistKey='tic-tac-toe'>
    <Game />
  </GameStateProvider>,
);
