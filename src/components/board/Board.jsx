import { Square } from 'components';
import styles from './styles.module.css';

/* 
TODO: 
- Create a new file withBoardProps.jsx and move the business logic in the HOC
*/

export const Board = ({ onClick, squares }) => {
  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={onClick(index)} />
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
