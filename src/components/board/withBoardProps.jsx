import { Square } from 'components';
import styles from './styles.module.css';

export const withBoardProps =
  (WrappedComponent) =>
  ({ onClick, squares, ...props }) => {
    const renderSquare = (index) => (
      <Square value={squares[index]} onClick={() => onClick(index)} />
    );

    const renderRow = (a, b, c) => (
      <div className={styles['board-row']}>
        {renderSquare(a)}
        {renderSquare(b)}
        {renderSquare(c)}
      </div>
    );

    return <WrappedComponent renderRow={renderRow} {...props} />;
  };
