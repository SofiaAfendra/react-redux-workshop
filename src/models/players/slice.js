import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
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
export const playersReducer = playersSlice.reducer;
export const { name: playersName } = playersSlice;
