import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';

/* TODO:  
- Create a new folder structure
- Use the new Game component and render the Board inside it
  Hint: apply what you learned in the previous branch
*/

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className={styles.square}>
      {value}
    </button>
  );
};

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (squareIndex) => {
    if (squares[squareIndex]) return;
    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
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
//   const handleReset = () => {};

//   return (
//     <div className={styles.gameWrapper}>{/* render the Board here */}</div>
//   );
// };

ReactDOM.createRoot(document.getElementById('root')).render(<Board />);
