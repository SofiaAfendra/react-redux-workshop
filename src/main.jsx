import ReactDOM from 'react-dom/client';
import { Game } from '@/components';
import './main.css';
import { GameStateProvider } from '@/models';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameStateProvider>
    <Game />
  </GameStateProvider>,
);
