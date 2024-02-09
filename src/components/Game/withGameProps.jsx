import { useState, useEffect, useRef } from 'react';
import { usePersistState } from 'libraries';
import { calculateWinner, getStatus } from 'utils';

/* TODO: 
    -Create a new folder named store in src. This folder will contain two files named stateProvider.jsx and store.js.

    -In store.js, use createContext to create a context object named gameState and extract the Provider from it.

    -Define a component named StateProvider in stateProvider.jsx that uses the useState hook to manage the state of the game.
      This component wraps its children with the Provider, making the game state accessible to its descendants.
      (README: add detail about using persistedState and useState to create multiple states)

    -Define the useGameState hook that uses the useContext hook to access the gameState context.

    -Include an error check to ensure that the hook is used within a StateProvider.

    -In main.jsx, wrap the Game component with StateProvider. This makes the game state available in any component by using useGameState.

    -Extract the state from gameState context in withGameProps and refactor previous logic.  
*/

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(''),
  xIsNext: true,
  winner: null,
};

export const withGameProps = (WrappedComponent) => (props) => {
  const [persistedState, setPersistedState] = usePersistState(initialState);
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
