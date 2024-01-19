import { useState, useEffect, useRef } from 'react';
import { calculateWinner, getStatus } from 'utils';
import { config } from 'config';

/* TODO: -Create a new folder library in src, in which add the persist-state folder to include the usePersistState.js file.

         -Create a custom Hook named usePersistState and move the logic of the persisted state from the withGameProps HOC in it.

         -Use the custom hook to provide the Game's persisted state logic to the HOC.
*/ 

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(''),
  xIsNext: true,
  winner: null,
};

export const withGameProps = (WrappedComponent) => (props) => {
  const [gameState, setGameState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );
  const { player1, player2, squares, xIsNext, winner } = gameState;
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
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex] || winner) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setGameState({
      ...gameState,
      xIsNext: !xIsNext,
      squares: newSquares,
      winner: calculateWinner(newSquares),
    });
  };

  const handlePlayer1 = (event) => {
    setGameState({
      ...gameState,
      player1: event.target?.value,
    });
  };

  const handlePlayer2 = (event) => {
    setGameState({
      ...gameState,
      player2: event.target?.value,
    });
  };

  const handleReset = () => {
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }

    setGameState(initialState);
  };

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(gameState));
  }, [gameState]);

  return (
    <WrappedComponent
      player1={player1}
      player2={player2}
      squares={squares}
      winner={winner}
      status={status}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      handlePlayer1={handlePlayer1}
      handlePlayer2={handlePlayer2}
      reset={handleReset}
      handleClick={handleClick}
      {...props}
    />
  );
};
