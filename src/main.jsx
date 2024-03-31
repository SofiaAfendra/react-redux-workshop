import ReactDOM from 'react-dom/client';
import { Game, UISetup } from 'components';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UISetup>
    <Game />
  </UISetup>,
);

//? rewrite the last bullet
/* TODO:
- Delete the unnecessary files from previous React implementations. (useGameState.js & usePersistState).
- create persistState.js. In this file create a function that will persist our state to local storage.
 HINT: it will take on a key parameter and will return an object with a property the initial state that will come from localStorage
 and the middleware method that will update the state to the localStorage after each action.
- at store.js make a function makeStore which will run the persistState function and will return the configureStore.

*/
