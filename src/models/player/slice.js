import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1: '',
  player2: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.player2 = action.payload;
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const playerSliceName = playerSlice.name;
