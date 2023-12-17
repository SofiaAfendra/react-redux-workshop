import { useGameState } from '../../utils/contextProvider';
import Square from '../square/Square';
import styles from './styles.module.css';

export const withBoardProps =
  (WrappedComponent) =>
  // eslint-disable-next-line react/display-name
  ({ onSquareClick, ...props }) => {
    const { squares } = useGameState();

    const renderSquare = (index) => (
      <Square value={squares[index]} handleClick={() => onSquareClick(index)} />
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
