import { useState, useEffect, useRef } from 'react';
import { Board } from 'components';
import { calculateWinner, getStatus } from 'utils';
import { config } from 'config';
import styles from './styles.module.css';

/* 
TODO: 
- Create a new file withGameProps.jsx and move the business logic in the HOC
*/

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(''),
  xIsNext: true,
  winner: null,
};

export const Game = () => {
  const [persistedState, setPersistedState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );
  const { player1, player2, squares, xIsNext, winner } = persistedState;
  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  if (player1Ref.current && winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (player2Ref.current && winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

  const status = winner
    ? getStatus(winner, player1, player2)
    : `Next player: ${xIsNext ? player1 : player2}`;

  const handleClick = (squareIndex) => () => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex] || winner) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setPersistedState({
      ...persistedState,
      xIsNext: !xIsNext,
      squares: newSquares,
      winner: calculateWinner(newSquares),
    });
  };

  const handlePlayer1 = (event) => {
    setPersistedState({
      ...persistedState,
      player1: event.target?.value,
    });
  };

  const handlePlayer2 = (event) => {
    setPersistedState({
      ...persistedState,
      player2: event.target?.value,
    });
  };

  const handleReset = () => {
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }

    setPersistedState(initialState);
  };

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(persistedState));
  }, [persistedState]);

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.boardAndStatusWrapper}>
        <div> {status}</div>
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
