import { Square } from 'components/square';
import { useGameState } from 'models';

export const withBoardProps =
  (WrappedComponent) =>
  ({ onClick, ...props }) => {
    const { state: { squares } = {} } = useGameState();

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
