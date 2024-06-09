import { Square } from 'components';

//TODO: remember that using the custom hook withGameProps you will get all the props needed to be passed down to the Board component
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
