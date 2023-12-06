import { Board } from '../Board';
import styles from './styles.module.css';

import { useState, useEffect } from 'react';
import { config } from '../../config';
import { calculateWinner } from '../../utils/calculateWinner';

// TO-DO: Use classes from previous state.

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(''),
  isNextX: true,
  winner: null
};

export const Game = () => {
  const [gameState, setGameState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );

  const { player1, player2, squares, isNextX, winner } = gameState || {};

  const status = winner
    ? `Winner is: ${
        winner === 'X' ? player1 : winner === 'O' ? player2 : winner
      }`
    : `Next player: ${isNextX ? player1 : player2}`;

  const handleClick = (squareIndex) => () => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex] || winner) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = isNextX ? 'X' : 'O';
    setGameState({
      ...gameState,
      isNextX: !isNextX,
      squares: newSquares,
      winner: calculateWinner(newSquares),
    });
  };
  
  const handleReset = () => {
    setGameState(initialState);
  };

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(gameState));
  }, [gameState]);

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
            onChange={(event) =>
              setGameState({
                ...gameState,
                player1: event.target.value,
              })
            }
          />
        </div>

        <div className={styles.input}>
          <label>Player 2:</label>
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
