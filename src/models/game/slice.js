import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer1: (state, { payload }) => {
      state.player1 = payload.player1;
    },
    setPlayer2: (state, { payload }) => {
      state.player2 = payload.player2;
    },
    setSquares: (state, { payload }) => {
      state.squares = payload.squares;
    },
    setWinner: (state, { payload }) => {
      state.winner = payload.winner;
    },
    setXIsNext: (state, { payload }) => {
      state.setXIsNext = payload.setXIsNext;
    },
    resetGame: () => initialState,
  },
});
export const gameReducer = gameSlice.reducer;
export const { name } = gameSlice;
