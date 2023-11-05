import { useRef } from 'react';
import { calculateWinner } from '@/utils/calculateWinner';

export const withGameProps = (WrappedComponent) => (props) => {
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
  } = props;

  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  if (player1Ref.current && winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (player2Ref.current && winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

  const handlePlayerMove = (squareIndex) => {
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

  const reset = () => {
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }

    resetGame();
  };

  const gameStatus = winner
    ? `Winner is: ${
        winner === 'X' ? player1 : winner === 'O' ? player2 : winner
      }`
    : `Next player: ${xIsNext ? player1 : player2}`;

  return (
    <WrappedComponent
      gameStatus={gameStatus}
      handlePlayerMove={handlePlayerMove}
      handlePlayer1={handlePlayer1}
      handlePlayer2={handlePlayer2}
      reset={reset}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      {...props}
    />
  );
};
