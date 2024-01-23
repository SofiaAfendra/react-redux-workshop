import { useContext, useEffect, useState } from 'react';
import { usePersistState } from 'libraries';
import { Provider, gameState } from './store';

const initState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};
export const GameStateProvider = ({ children, persistKey }) => {
  const { persistedState, setPersistedState } = usePersistState(
    persistKey,
    initState,
  );
  const [player1, setPlayer1] = useState(persistedState?.player1);
  const [player2, setPlayer2] = useState(persistedState?.player2);
  const [squares, setSquares] = useState(persistedState?.squares);
  const [xIsNext, setXIsNext] = useState(persistedState?.xIsNext);
  const [winner, setWinner] = useState(persistedState?.winner);

  useEffect(() => {
    setPersistedState({
      player1,
      player2,
      squares,
      xIsNext,
      winner,
    });
  }, [player1, player2, squares, xIsNext, winner, setPersistedState]);

  const value = {
    player1,
    player2,
    squares,
    xIsNext,
    winner,
    setPlayer1,
    setPlayer2,
    setSquares,
    setXIsNext,
    setWinner,
  };

  return <Provider value={value}>{children}</Provider>;
};

export const useGameState = () => {
  const context = useContext(gameState);

  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }

  return context;
};
