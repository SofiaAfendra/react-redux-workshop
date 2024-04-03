import ReactDOM from 'react-dom/client';
import { Game } from 'components';
import { StateProvider } from 'reactStore';
import { config } from 'config';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider persistKey={config.PERSIST_KEY}>
    <Game />
  </StateProvider>,
);

/* TODO:
- Add a folder named store and create store.js and configure the redux store of the game.
- Use reducer from the models/test folder.
- Inside the component folder create a new folder named UI-Setup. Inside that folder create UISetup.jsx.
*/
