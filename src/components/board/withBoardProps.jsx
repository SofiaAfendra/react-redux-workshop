import { Square } from 'components';

export const withBoardProps =
  (WrappedComponent) =>
  ({ onClick, squares, ...props }) => {
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
