import { Board } from '../Board';
import styles from './styles.module.css';

import { useState, useEffect } from 'react';

// TO-DO: Use classes from previous state.

const EMPTY_VALUE = '';
export const initialState = {
  player1: EMPTY_VALUE,
  player2: EMPTY_VALUE,
  squares: Array(9).fill(EMPTY_VALUE),
  isNextX: true,
};

export const Game = () => {
  const [gameState, setGameState] = useState(
    JSON.parse(localStorage.getItem('ticTacToeGameState')) ?? initialState,
  );

  const { player1, player2, squares, isNextX } = gameState;

  const status = `It's ${isNextX ? player1 : player2} 's turn`;

  const handleClick = (squareIndex) => () => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex]) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = isNextX ? 'X' : 'O';
    setGameState({
      ...gameState,
      isNextX: !isNextX,
      squares: newSquares,
    });
  };

  const handleReset = () => {
    setGameState(initialState);
  };

  useEffect(() => {
    localStorage.setItem('ticTacToeGameState', JSON.stringify(gameState));
  }, [gameState]);

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.boardAndStatusWrapper}>
        <div>Game Status: {status}</div>
        <div className={styles.boardWrapper}>
          <Board squares={squares} onClick={handleClick} />
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <label>First Player:</label>
          <input
            value={player1}
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
            onChange={(event) =>
              setGameState({
                ...gameState,
                player2: event.target.value,
              })
            }
          />
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
