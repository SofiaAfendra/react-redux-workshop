import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.player2 = action.payload;
    },
    setSquares: (state, action) => {
      state.squares = action.payload;
    },
    setXIsNext: (state, action) => {
      state.xIsNext = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
    resetGame: () => {
      return initialState;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameSliceName = gameSlice.name;
