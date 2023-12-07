import { useState, useEffect, useRef } from 'react';
import { config } from '../../config';
import { calculateWinner, getStatus } from '../../util';

// TO-DO: Use classes from previous state.

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

  const gameStatus = !winner
    ? `It's ${xIsNext ? player1 : player2} 's turn`
    : getStatus(winner, player1, player2);

  const handleClick = (squareIndex) => () => {
    if (!(player1 && player2)) {
      alert('Please, set the names of both players.');
      return;
    }

    if (squares[squareIndex]) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setGameState({
      ...gameState,
      xIsNext: !xIsNext,
      squares: newSquares,
      winner: calculateWinner(newSquares),
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
      gameStatus={gameStatus}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      reset={handleReset}
      handleClick={handleClick}
      gameState={gameState}
      setGameState={setGameState}
      {...props}
    />
  );
};
