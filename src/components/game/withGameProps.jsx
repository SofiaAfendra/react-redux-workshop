import { useRef } from 'react';
import { calculateWinner, getStatus } from 'utils';
import { useGameStore } from 'utils';

export const withGameProps = (WrappedComponent) => () => {
  const {
    player1,
    player2,
    squares,
    winner,
    xIsNext,
    setPlayer1,
    setPlayer2,
    setSquares,
    setWinner,
    setXIsNext,
    resetGame,
  } = useGameStore();
  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  if (player1Ref.current && winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (player2Ref.current && winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

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
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setWinner(newWinner);
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

    resetGame();
  };

  const status = winner
    ? getStatus(winner, player1, player2)
    : `Next player: ${xIsNext ? player1 : player2}`;

  return (
    <WrappedComponent
      status={status}
      handleClick={handleClick}
      handlePlayer1={handlePlayer1}
      handlePlayer2={handlePlayer2}
      handleReset={handleReset}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      player1={player1}
      player2={player2}
      squares={squares}
    />
  );
};
