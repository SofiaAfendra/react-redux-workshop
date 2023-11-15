import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';

/* TODO:  
- Create a new folder structure. 
- Use the new Game component and render the Board inside it.
  hint: apply what you learned in the previous branch. 
*/

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className={styles.square}>
      {value}
    </button>
  );
};

const Board = () => {
  const [isNextX, setIsNextX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (squareIndex) => () => {
    if (squares[squareIndex]) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = isNextX ? 'X' : 'O';
    setSquares(newSquares);
    setIsNextX(!isNextX);
  };

  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={handleClick(index)} />
  );

  const renderRow = (index1, index2, index3) => (
    <div>
      {renderSquare(index1)}
      {renderSquare(index2)}
      {renderSquare(index3)}
    </div>
  );
  return (
    <div className={styles.board}>
      {renderRow(0, 1, 2)}
      {renderRow(3, 4, 5)}
      {renderRow(6, 7, 8)}
    </div>
  );
};

// const Game = () => {
//   const handleClick = () => {};

//   const handleReset = () => {};

//   return (
//     <div className={styles.gameWrapper}>
//       <div className={styles.boardAndStatusWrapper}>
//         {/* render the Status*/}
//         <div className={styles.boardWrapper}>{/*render the board */}</div>
//       </div>
//       <div className={styles.inputWrapper}>
//         <div className={styles.input}>
//           <label>First Player:</label>
//           <input />
//         </div>

//         <div className={styles.input}>
//           <label>Second Player:</label>
//           <input />
//         </div>

//         <div className={styles.resetBtnWrapper}></div>
//       </div>
//     </div>
//   );
// };

ReactDOM.createRoot(document.getElementById('root')).render(<Board />);
