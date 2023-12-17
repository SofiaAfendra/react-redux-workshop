import { Board } from '@/components';
import styles from './styles.module.css';
import { withGameProps } from './withGameProps';

const GameComponent = ({
  player1,
  player2,
  squares,
  status,
  makeMove,
  handlePlayer1,
  handlePlayer2,
  reset,
  player1Ref,
  player2Ref,
}) => (
  <div className={styles['game']}>
    <div className={styles.status}>{status}</div>
    <div className={styles['game-board']}>
      <Board squares={squares} onSquareClick={makeMove} />
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
