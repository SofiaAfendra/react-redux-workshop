import { Board } from 'components';
import { withGameProps } from './withGameProps';
import styles from './styles.module.css';

const GameComponent = ({
  player1,
  player2,
  squares,
  status,
  handleClick,
  handlePlayer1,
  handlePlayer2,
  reset,
  player1Ref,
  player2Ref,
}) => (
  <div className={styles.game}>
    <div className={styles.gameStatus}>{status}</div>
    <div className={styles['game-board']}>
      <Board squares={squares} onSquareClick={handleClick} />
    </div>
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <label htmlFor='player-1'>Player 1</label>
        <input
          type='text'
          id='player-1'
          value={player1}
          onChange={handlePlayer1}
          ref={player1Ref}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor='player-2'>Player 2</label>
        <input
          type='text'
          id='player-2'
          value={player2}
          onChange={handlePlayer2}
          ref={player2Ref}
        />
      </div>
      <div className={styles.row}>
        <button type='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  </div>
);

export const Game = withGameProps(GameComponent);
