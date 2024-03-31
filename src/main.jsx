import ReactDOM from 'react-dom/client';
import { Game, UISetup } from 'components';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UISetup>
    <Game />
  </UISetup>,
);

/* TODO:

- Inside _actions.js_ define and export all tic-tac-toe related actions,
 they should return action objects with the type and payload properties.
   > Hint: Each action should always return a type, but the payload is not always necessary.
- Inside _store/store.js_ replace initialTestState and testReducer with initialGameState and gameReducer from _models/game/reducer.js_.
- Use Redux Dev Tools to dispatch Custom actions and confirm everything works correctly.

*/
