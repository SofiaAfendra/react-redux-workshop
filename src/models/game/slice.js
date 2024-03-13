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
      state.player1 = payload;
    },
    setPlayer2: (state, { payload }) => {
      state.player2 = payload;
    },
    setSquares: (state, { payload }) => {
      state.squares = payload;
    },
    setWinner: (state, { payload }) => {
      state.winner = payload;
    },
    setXIsNext: (state, { payload }) => {
      state.xIsNext = payload;
    },
    resetGame: () => initialState,
  },
});
export const gameReducer = gameSlice.reducer;
export const { name } = gameSlice;
