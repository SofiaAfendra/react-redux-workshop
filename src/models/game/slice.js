import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
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
export const gameSliceName = gameSlice.name;
