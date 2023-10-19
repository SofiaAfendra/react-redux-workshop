import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';

/* TODO: 
- Change component so when clicked it updates its state and draws 'X' or 'O' alternately
Hint: A functional component can use multiple state hooks
 */

const Square = () => {
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [value, setValue] = useState('');

  const handleClick = () => {
    isPlayer1 ? setValue('X') : setValue('O');
    setIsPlayer1(!isPlayer1);
  };
  return (
    <button onClick={handleClick} className={styles.square}>
      {value}
    </button>
  );
};

const Board = () => {
  const renderSquare = () => {
    //Hint- return the Square Component
  };

  const renderRow = () => {};
  return <div></div>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Square />);
