import { Board } from 'components';
import { withGameProps } from './withGameProps';
import styles from './styles.module.css';

/* TODO:
- Add a selectors.js in game model folder. Create selectors for every key of the state (player1, squares, etc.).
- Create a mapStateToProps function to request the required part from state.
    Hint: use the selectors here.
- Create a mapDispatchToProps, which is an object with the required actions.
- Use mapStateToProps and mapDispatchToProps with connect which is a higher order function from Redux.
- Use compose function from Redux to compose both connect and the HOC with the component.
*/

const Game = ({
  player1,
  player2,
  player1Ref,
  player2Ref,
  squares,
  status,
  handleClick,
  handlePlayer1,
  handlePlayer2,
  handleReset,
}) => (
  <div className={styles.gameWrapper}>
    <div className={styles.boardAndStatusWrapper}>
      <div>{status}</div>
      <div className={styles.boardWrapper}>
        <Board squares={squares} onClick={handleClick} />
      </div>
    </div>

    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <label>Player 1:</label>
        <input value={player1} ref={player1Ref} onChange={handlePlayer1} />
      </div>

      <div className={styles.input}>
        <label>Player 2:</label>
        <input value={player2} ref={player2Ref} onChange={handlePlayer2} />
      </div>

      <div className={styles.resetBtnWrapper}>
        <button onClick={handleReset} className={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  </div>
);

export default withGameProps(Game);
