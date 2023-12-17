import { useRef } from 'react';
import { calculateWinner, getStatus } from 'utils';
import { useGameState } from 'store';

/* TODO: - Move logic and business data from the HOC into the
 *        'usePersistStateHook' custom hook that you'll create.
 *       - Use the 'usePersistStateHook' to get the Game's persisted state logic.
 */

// TODO: Move this to custom hook

// eslint-disable-next-line react/display-name
export const withGameProps = (WrappedComponent) => (props) => {
  const {
    setSquares,
    setXIsNext,
    setWinner,
    setPlayer1,
    setPlayer2,
    player1,
    player2,
    squares,
    xIsNext,
    winner,
    setPersistedState,
  } = useGameState();

  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  if (winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

  const status = winner
    ? getStatus(winner, player1, player2)
    : `Next player: ${xIsNext ? player1 : player2}`;

  const makeMove = (squareIndex) => {
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

    setWinner(newWinner);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    setPersistedState({
      squares: nextSquares,
      xIsNext: !xIsNext,
      winner: newWinner,
    });
  };

  const handlePlayer1 = (event) => {
    setPlayer1(event?.target?.value);
  };

  const handlePlayer2 = (event) => {
    setPlayer2(event?.target?.value);
  };

  const reset = () => {
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }

    setPlayer1('');
    setPlayer2('');
    setWinner(null);
    setXIsNext(true);
    setSquares(Array(9).fill(null));

    setPersistedState.reset();
  };

  return (
    <WrappedComponent
      player1={player1}
      player2={player2}
      squares={squares}
      xIsNext={xIsNext}
      winner={winner}
      status={status}
      makeMove={makeMove}
      handlePlayer1={handlePlayer1}
      handlePlayer2={handlePlayer2}
      reset={reset}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      {...props}
    />
  );
};
