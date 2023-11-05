import { Square } from '@/components';

export const withBoardProps =
  (WrappedComponent) =>
  ({ onSquareClick, ...props }) => {
    const { squares } = props;

    const renderSquare = (index) => (
      <Square value={squares[index]} handleClick={() => onSquareClick(index)} />
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
