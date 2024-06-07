import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1: '',
  player2: '',
};

export const playerSlice = createSlice({
  name: 'player',
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

export const playerReducer = playerSlice.reducer;
export const playerSliceName = playerSlice.name;
