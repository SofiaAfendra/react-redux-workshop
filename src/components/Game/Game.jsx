import { Board } from 'components';
import styles from './styles.module.css';
import { withGameProps } from './withGameProps';

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
}) => {
  return (
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
};

export default withGameProps(Game);
