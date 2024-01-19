import { useGameState } from 'store';
import { Square } from 'components/square';
import styles from './styles.module.css';

export const withBoardProps =
  (WrappedComponent) =>
  // eslint-disable-next-line react/display-name
  ({ onClick, ...props }) => {
    const { squares } = useGameState();

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

    return (
      <WrappedComponent
        {...props}
        renderSquare={renderSquare}
        renderRow={renderRow}
      />
    );
  };
