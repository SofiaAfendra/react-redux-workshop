import { Board } from '../Board';
import styles from './styles.module.css';

import { useState, useEffect, useRef } from 'react';
import { config } from '../../config';
import { calculateWinner, getStatus } from '../../util';

// TO-DO: Use classes from previous state.

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(''),
  isNextX: true,
  winner: null,
};

export const Game = () => {
  const [gameState, setGameState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );
  const { player1, player2, squares, isNextX, winner } = gameState;
  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  if (player1Ref.current && winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (player2Ref.current && winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

  const status = !winner
    ? `It's ${isNextX ? player1 : player2} 's turn`
    : getStatus(winner, player1, player2);

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
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }

    setGameState(initialState);
  };

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(gameState));
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
          <button onClick={handleReset} className={styles.resetButton}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
