import { gameSlice } from './slice';

export const {
  setPlayer1,
  setPlayer2,
  setWinner, //
  setXIsNext,
  setSquares,
  resetGame,
} = gameSlice.actions;
