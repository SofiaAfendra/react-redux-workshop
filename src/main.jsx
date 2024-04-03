import ReactDOM from 'react-dom/client';
import { Game, UISetup } from 'components';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UISetup>
    <Game />
  </UISetup>,
);

//! rewrite better 3rd bullet
/* TODO:

- Inside actions.js define and export all tic-tac-toe related actions,
 they should return action objects with the type and payload properties.
- Inside store/store.js replace initialTestState and testReducer with initialGameState and gameReducer from models/game/reducer.js.
- Inside store folder, create rootReducer.js and define a rootReducer using the reducer.js.
- Use Redux Dev Tools to dispatch Custom actions and confirm everything works correctly.

*/
