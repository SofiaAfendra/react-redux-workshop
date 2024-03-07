import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const gameSlice = createSlice({
  name: 'gameReducer',
  initialState,
  reducers: {
    setPlayer1: (state, payload) => {
      state.player1 = payload.player1;
    },
    setPlayer2: (state, payload) => {
      state.player2 = payload.player2;
    },
    setSquares: (state, payload) => {
      state.squares = payload.squares;
    },
    setWinner: (state, payload) => {
      state.winner = payload.winner;
    },
    setXIsNext: (state, payload) => {
      state.setXIsNext = payload.setXIsNext;
    },
    resetGame: (state) => {
      state.squares = initialState.squares;
      state.xIsNext = initialState.xIsNext;
      state.winner = initialState.winner;
    },
  },
});
export const gameReducer = gameSlice.reducer;
export const {
  setPlayer1,
  setPlayer2,
  setSquares,
  setWinner,
  setXIsNext,
  resetGame,
} = gameSlice.actions;
