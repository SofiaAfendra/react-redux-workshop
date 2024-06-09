import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1: '',
  player2: '',
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.player2 = action.payload;
    },
    resetPlayers: () => {
      return initialState;
    },
  },
});

export const playerReducer = playersSlice.reducer;
export const playerSliceName = playersSlice.name;
