import { Board } from '../Board';
import styles from './styles.module.css';

import { useState } from 'react';

/* TODO:  
- Add the following inside the Game component:
  - Two inputs with labels for the player names.
  - A status showing which player is next.
  - A button that resets the games. 
- Create new state for the input elements and connect them with it.
*/

export const Game = () => {
  const [isNextX, setIsNextX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (squareIndex) => () => {
    if (squares[squareIndex]) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = isNextX ? 'X' : 'O';
    setSquares(newSquares);
    setIsNextX(!isNextX);
  };

  // const handleReset = () => {
  //   //hint: should reset the state
  // }

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.boardAndStatusWrapper}>
        {/* render the status here */}
        <Board squares={squares} onClick={handleClick} />
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          {/* <label>Player 1:</label>
          <input /> */}
        </div>

        <div className={styles.input}>
          {/* <label>Player 2:</label>
          <input /> */}
        </div>

      </div>
      <div className={styles.resetBtnWrapper}>
        {/* render button and add resetButton css class */}
      </div>
    </div>
  );
};
