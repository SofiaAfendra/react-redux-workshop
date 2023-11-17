import { Board } from '../Board';
import styles from './styles.module.css';

import { useState } from 'react';

// TO-DO: Use classes from previous state.

export const Game = () => {
  const emptySquares = Array(9).fill('');
  const [isNextX, setIsNextX] = useState(true);
  const [squares, setSquares] = useState(emptySquares);
  //split players into two states
  const [{ player1, player2 }, setPlayers] = useState({
    player1: '',
    player2: '',
  });
  const status = `It's ${isNextX ? player1 : player2} 's turn`;

  const handleClick = (squareIndex) => () => {
    if (squares[squareIndex]) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = isNextX ? 'X' : 'O';
    setSquares(newSquares);
    setIsNextX(!isNextX);
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
          <label>First Player:</label>
          <input
            value={player1}
            onChange={(event) =>
              // setPlayers({ player1: event.target.value, player2 })
              setPlayers((prevPs)=> ({...prevPs, player1: event.target.value}))
            }
          />
        </div>

        <div className={styles.input}>
          <label>Second Player:</label>
          <input
            value={player2}
            onChange={(event) =>
              setPlayers({ player1, player2: event.target.value })
            }
          />
        </div>

        <div className={styles.resetBtnWrapper}>
          <button
            onClick={() => setSquares(emptySquares)}
            className={styles.resetButton}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
