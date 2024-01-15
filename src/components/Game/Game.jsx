import { useState } from 'react';
import { Board } from 'components/Board';
// import { calculateWinner } from 'utils';
import styles from './styles.module.css';

/* TODO:
- Add the useEffect hook inside the Game component to load/update state from/to localStorage
- Create winner state
- If winner exists, use the provided utility function calculateWinner to display the result in 'status'
- Update handleReset so that it clears the localStorage
*/

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const status = `Next player: ${xIsNext ? player1 : player2}`;

  const handleClick = (squareIndex) => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex]) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handlePlayer1 = (event) => {
    setPlayer1(event?.target?.value);
  };

  const handlePlayer2 = (event) => {
    setPlayer2(event?.target?.value);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(''));
    setPlayer1('');
    setPlayer2('');
  };

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
          <input value={player1} onChange={handlePlayer1} />
        </div>

        <div className={styles.input}>
          <label>Player 2:</label>
          <input value={player2} onChange={handlePlayer2} />
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
