import ReactDOM from 'react-dom/client';
import { Game, UISetup } from 'components';
import './main.css';

/* TODO:
- Inside actions.js define and export all tic-tac-toe related action functions,
 they should return action objects with the type and payload properties.
- Inside store folder, create rootReducer.js and define a rootReducer using the reducer.js.
- Inside store/store.js replace testReducer with rootReducer respectively.
- Use Redux Dev Tools to dispatch Custom actions and confirm everything works correctly.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <UISetup>
    <Game />
  </UISetup>,
);
