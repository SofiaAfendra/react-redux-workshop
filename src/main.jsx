import ReactDOM from 'react-dom/client';
import { Game } from '@/components';
import './main.css';
import { GameStateProvider } from './utils/contextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameStateProvider persistKey='tic-tac-toe'>
    <Game />
  </GameStateProvider>,
);
