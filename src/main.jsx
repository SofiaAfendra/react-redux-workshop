import ReactDOM from 'react-dom/client';
import { Game } from 'components';
import { StateProvider } from 'reactStore';
import { config } from 'config';
import './main.css';
import { UISetup } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider persistKey={config.PERSIST_KEY}>
    <UISetup>
      <Game />
    </UISetup>
  </StateProvider>,
);
