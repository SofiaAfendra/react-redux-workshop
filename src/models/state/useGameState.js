import { useContext } from 'react';
import { gameState } from './GameStateProvider';

export const useGameState = () => {
  const context = useContext(gameState);

  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }

  return context;
};
