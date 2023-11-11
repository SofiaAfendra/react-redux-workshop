import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';

/* TODO:  
- Lift the state from the Square component to the new Board component, and add a class named 'board'.
- Update renderSquare and renderRow functions to render all the squares needed for the game.
- Modify handleClick so that a square that already has a value does not change.
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

ReactDOM.createRoot(document.getElementById('root')).render(<Board />);
