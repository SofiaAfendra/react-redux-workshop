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

  const [player1, setPlayer1] = useState(persistedState.player1);
  const [player2, setPlayer2] = useState(persistedState.player2);
  const [squares, setSquares] = useState(persistedState.squares);
  const [xIsNext, setXIsNext] = useState(persistedState.xIsNext);
  const [winner, setWinner] = useState(persistedState.winner);

  useEffect(() => {
    setPersistedState({
      player1,
      player2,
      squares,
      xIsNext,
      winner,
    });
  }, [player1, player2, squares, xIsNext, winner, setPersistedState]);

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
    if (!player1 || !player2) {
      alert("Please provide players' names.");
      return;
    }

    if (squares[squareIndex] || winner) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    const newWinner = calculateWinner(newSquares);

    setWinner(newWinner);
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handlePlayer1 = (event) => {
    setPlayer1(event.target?.value);
  };

  const handlePlayer2 = (event) => {
    setPlayer2(event.target?.value);
  };

  const handleReset = () => {
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }
    setPlayer1('');
    setPlayer2('');
    setWinner(null);
    setXIsNext(true);
    setSquares(Array(9).fill(null));
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
