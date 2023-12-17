import { Board } from '../Board';
import styles from './styles.module.css';

import { useState, useEffect } from 'react';
import { config } from '../../config';
import { calculateWinner, getStatus } from '../../utils';

// TODO: DEV - rethink how we get the status, the nesting is too damnh high.

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(''),
  xIsNext: true,
  winner: null
};

export const Game = () => {
  const [gameState, setGameState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );

  const { player1, player2, squares, xIsNext, winner } = gameState || {};

  const status = winner
    ? getStatus(winner, player1, player2)
    : `Next player: ${xIsNext ? player1 : player2}`;

  const handleClick = (squareIndex) => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex] || winner) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setGameState({
      ...gameState,
      xIsNext: !xIsNext,
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
