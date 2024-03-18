import { Square } from 'components';
import { useGameStore } from 'models';

export const withBoardProps =
  (WrappedComponent) =>
  ({ onClick, ...props }) => {
    const { squares } = useGameStore();

    const renderSquare = (index) => (
      <Square value={squares[index]} handleClick={() => onClick(index)} />
    );

    const renderRow = (a, b, c) => (
      <div>
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
