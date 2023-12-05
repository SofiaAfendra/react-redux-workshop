import { Board } from '../Board';
import styles from './styles.module.css';

import { useState } from 'react';

// TO-DO: Use classes from previous state.

export const Game = () => {
  const EMPTY_VALUE = '';
  const emptySquares = Array(9).fill(EMPTY_VALUE);
  const [isNextX, setIsNextX] = useState(true);
  const [squares, setSquares] = useState(emptySquares);
  const [player1, setPlayer1] = useState(EMPTY_VALUE);
  const [player2, setPlayer2] = useState(EMPTY_VALUE);

  const status = `It's ${isNextX ? player1 : player2} 's turn`;

  const handleClick = (squareIndex) => () => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex]) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = isNextX ? 'X' : 'O';
    setSquares(newSquares);
    setIsNextX(!isNextX);
  };

  const handleReset = () => {
    setSquares(emptySquares);
    setPlayer1(EMPTY_VALUE);
    setPlayer2(EMPTY_VALUE);
  };

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
          <label>Player 1:</label>
          <input
            value={player1}
            onChange={(event) => setPlayer1(event.target.value)}
          />
        </div>

        <div className={styles.input}>
          <label>Player 2:</label>
          <input
            value={player2}
            onChange={(event) => setPlayer2(event.target.value)}
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
