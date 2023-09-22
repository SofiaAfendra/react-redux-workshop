import { useRef } from 'react';
import { useGameState } from '@/models';

export const withGameProps = (WrappedComponent) => (props) => {
  const { state, dispatch } = useGameState();

  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  const { player1, player2, xIsNext, winner } = state || {};

  if (player1Ref.current && winner === 'X') {
    player1Ref.current.style.border = '2px solid green';
  }

  if (player2Ref.current && winner === 'O') {
    player2Ref.current.style.border = '2px solid green';
  }

  const handlePlayer1 = (event) => {
    dispatch({
      type: 'SET_PLAYER1',
      payload: event?.target?.value,
    });
  };

  const handlePlayer2 = (event) => {
    dispatch({
      type: 'SET_PLAYER2',
      payload: event?.target?.value,
    });
  };

  const reset = () => {
    if (player1Ref.current) {
      player1Ref.current.style.border = '';
    }
    if (player2Ref.current) {
      player2Ref.current.style.border = '';
    }

    dispatch({
      type: 'RESET',
    });
  };

  const gameStatus = winner
    ? `Winner is: ${
        winner === 'X' ? player1 : winner === 'O' ? player2 : winner
      }`
    : `Next player: ${xIsNext ? player1 : player2}`;

  return (
    <WrappedComponent
      player1={player1}
      player2={player2}
      xIsNext={xIsNext}
      winner={winner}
      gameStatus={gameStatus}
      handlePlayer1={handlePlayer1}
      handlePlayer2={handlePlayer2}
      reset={reset}
      player1Ref={player1Ref}
      player2Ref={player2Ref}
      {...props}
    />
  );
};
