import { useState } from 'react';
import { Board } from 'components/Board';
import styles from './styles.module.css';

/* TODO:
- Add the following inside the Game component:
  a) two inputs with labels for the player names
  b) a status showing which player is next
  c) a button that resets the games
- Create new state for the input elements and connect them with it
*/

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (squareIndex) => {
    if (squares[squareIndex]) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // const handleReset = () => {
  //   //Hint - should reset the state
  // }

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.boardAndStatusWrapper}>
        {/* render the status here */}
        <Board squares={squares} onClick={handleClick} />
      </div>

      {/* <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <label>Player 1:</label>
          <input />
        </div>

        <div className={styles.input}>
          <label>Player 2:</label>
          <input />
        </div>
      </div> */}

      {/* <div className={styles.resetBtnWrapper}>
        render button and add resetButton css class
      </div> */}
    </div>
  );
};
