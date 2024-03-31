import ReactDOM from 'react-dom/client';
import { Game, UISetup } from 'components';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UISetup>
    <Game />
  </UISetup>,
);

/* TODO:

- Add a selectors.js in game model folder.
 Create selectors for every key of the state (player1, squares, etc.).
- At file components/game/Game.jsx:
  1. rename Game to GameComponent.
  2. Create a mapStateToProps function to request the required part from state.
    Hint: use the selectors here.
  3. Create a mapDispatchToProps, which here is just an object with the required actions.
  4. Use mapStateToProps and mapDispatchToProps with connect which is a higher order function from Redux.
  5. Use compose function from Redux to compose both connect and the HoC with the component.

*/
