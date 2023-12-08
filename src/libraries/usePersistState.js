import { useState, useEffect } from 'react';
import { config } from '../config';

export const usePersistState = (initialState) => {
  const [gameState, setGameState] = useState(
    localStorage.getItem(config.PERSIST_KEY) ?? initialState,
  );

  useEffect(() => {
    localStorage.setItem(config.PERSIST_KEY, JSON.stringify(gameState));
  }, [gameState]);

  return [gameState, setGameState];
};
