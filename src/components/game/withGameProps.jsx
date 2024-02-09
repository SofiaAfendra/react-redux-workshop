import { useRef } from 'react';
import { useGameState } from 'store';
import { calculateWinner, getStatus } from 'utils';

/* TODO: 
    -Create a new folder named **models** and another folder named **game** inside it.
    
    -In the game folder, create the useGameState.js and reducer.js files.

    -Move useGameState hook definition from stateProvider.jsx to useGameState.js

    -Move the initialState definition to reducer.js and define a function named gameReducer. 
        -Accepts the state and an action.
        -Uses switch case against the action and updates the state.

    -In stateProvider.jsx, replace all useState hooks with the useReducer hook and update useEffect and value prop accordingly.
   
    -Finally in withGameProps.jsx, extract state and dispatch from useGameState and replace previous state management,
     by calling dispatch with the appropriate type and payload.

 */

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
  } = useGameState();

  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  if (player1Ref.current && winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (player2Ref.current && winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

  const status = winner
    ? getStatus(winner, player1, player2)
    : `Next player: ${xIsNext ? player1 : player2}`;

  const handleClick = (squareIndex) => {
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
  };

  const handlePlayer1 = (event) => {
    setPlayer1(event?.target?.value);
  };

  const handlePlayer2 = (event) => {
    setPlayer2(event?.target?.value);
  };

  const handleReset = () => {
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
  };

  return (
    <WrappedComponent
      player1={player1}
      player2={player2}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      squares={squares}
      status={status}
      handleClick={handleClick}
      handlePlayer1={handlePlayer1}
      handlePlayer2={handlePlayer2}
      handleReset={handleReset}
      {...props}
    />
  );
};
