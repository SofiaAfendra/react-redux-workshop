import { useState, useEffect, useRef } from 'react';
import { calculateWinner, getStatus } from 'utils';
import { config } from 'config';

/* TODO: -Create a new folder library in src, in which add a file named usePersistState.js.

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
  const [persistedState, setPersistedState] = useState(
    JSON.parse(localStorage.getItem(config.PERSIST_KEY)) ?? initialState,
  );

  const [player1, setPlayer1] = useState(persistedState.player1);
  const [player2, setPlayer2] = useState(persistedState.player2);
  const [squares, setSquares] = useState(persistedState.squares);
  const [xIsNext, setXIsNext] = useState(persistedState.xIsNext);
  const [winner, setWinner] = useState(persistedState.winner);

  useEffect(() => {
    setPersistedState({
      player1,
      player2,
      squares,
      xIsNext,
      winner,
    });
  }, [player1, player2, squares, xIsNext, winner, setPersistedState]);

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

    if (squares[squareIndex] || winner) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';
    const newWinner = calculateWinner(newSquares);

    setWinner(newWinner);
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handlePlayer1 = (event) => {
    setPlayer1(event.target?.value);
  };

  const handlePlayer2 = (event) => {
    setPlayer2(event.target?.value);
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

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(persistedState));
  }, [persistedState]);

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
