import { useGameState } from '@/models';
import { calculateWinner } from '@/utils/calculateWinner';
import { Square } from '@/components';


export const withBoardProps =
  (WrappedComponent) =>
  (props) => {
    const { state, dispatch } = useGameState();

    const { player1, player2, xIsNext, winner, squares } = state || {};

    const handlePlayerClick = (squareIndex) => {
      if (!player1 || !player2) {
        alert("Please provide players' names.");
        return;
      }
  
      if (squares[squareIndex] || winner) {
        return;
      }
  
      const nextSquares = [...squares];
      nextSquares[squareIndex] = xIsNext ? 'X' : 'O';
      const newWinner = calculateWinner(nextSquares);
  
      dispatch({
        type: 'SET_SQUARES',
        payload: nextSquares,
      });
  
      dispatch({
        type: 'SET_X_IS_NEXT',
        payload: !xIsNext,
      });
  
      dispatch({
        type: 'SET_WINNER',
        payload: newWinner,
      });
    };
  

    const renderSquare = (index) => (
      <Square value={squares[index]} handleClick={() => handlePlayerClick(index)} />
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
