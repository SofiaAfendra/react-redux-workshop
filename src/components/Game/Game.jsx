import { Board } from '../Board';
import styles from './styles.module.css';
import { withGameProps } from './withGameProps';

const GameComponent = ({
  gameStatus,
  player1,
  player1Ref,
  player2,
  player2Ref,
  handleClick,
  reset,
  gameState,
  setGameState,
  squares,
}) => {
  return (
    <div className={styles.gameWrapper}>
      <div className={styles.boardAndStatusWrapper}>
        <div>Game Status: {gameStatus}</div>
        <div className={styles.boardWrapper}>
          <Board squares={squares} onClick={handleClick} />
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <label>First Player:</label>
          <input
            value={player1}
            ref={player1Ref}
            onChange={(event) =>
              setGameState({
                ...gameState,
                player1: event.target.value,
              })
            }
          />
        </div>

        <div className={styles.input}>
          <label>Second Player:</label>
          <input
            value={player2}
            ref={player2Ref}
            onChange={(event) =>
              setGameState({
                ...gameState,
                player2: event.target.value,
              })
            }
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
