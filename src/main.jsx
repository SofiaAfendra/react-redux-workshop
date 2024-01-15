import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';

/* TODO:  
- Lift the state from the Square component to the new Board component, and add a class named 'board'
- Update renderSquare and renderRow functions to render all the squares needed for the game
  Hint: Think of each square as an array element that holds a value
- Modify handleClick so that a square that already has a value does not change
*/

const Square = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [value, setValue] = useState(null);

  const handleClick = () => {
    xIsNext ? setValue('X') : setValue('O');
    setXIsNext(!xIsNext);
  };

  return (
    <button onClick={handleClick} className={styles.square}>
      {value}
    </button>
  );
};

// const Board = () => {
//   const renderSquare = () => {
//     // Hint - returns the Square component
//   };

//   const renderRow = () => {
//     // Hint - returns 3 Squares in a row
//   };
//   return <div></div>;
// };

ReactDOM.createRoot(document.getElementById('root')).render(<Square />);
