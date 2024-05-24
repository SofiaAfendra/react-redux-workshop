import { useContext } from 'react';
import { gameState } from '../../reactStore/store';

export const useGameState = () => {
  const context = useContext(gameState);

  if (context === undefined) {
    throw new Error('useGameState must be used within StateProvider');
  }

  return context;
};
