import { Board } from 'components/Board';

import styles from './styles.module.css';
import { withGameProps } from './withGameProps';

const GameComponent = ({
  status,
  player1,
  player1Ref,
  handlePlayer1,
  player2,
  player2Ref,
  handlePlayer2,
  handleClick,
  reset,
  squares,
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
          <input
            value={player1}
            ref={player1Ref}
            onChange={handlePlayer1}
          />
        </div>

        <div className={styles.input}>
          <label>Player 2:</label>
          <input
            value={player2}
            ref={player2Ref}
            onChange={handlePlayer2}
          />
        </div>

        <div className={styles.resetBtnWrapper}>
          <button onClick={reset} className={styles.resetButton}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export const Game = withGameProps(GameComponent);
