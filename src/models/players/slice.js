import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1: '',
  player2: '',
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayer1: (state, { payload }) => {
      state.player1 = payload;
    },
    setPlayer2: (state, { payload }) => {
      state.player2 = payload;
    },
    resetPlayers: () => initialState,
  },
});

export const playerReducer = playersSlice.reducer;
export const playerSliceName = playersSlice.name;
