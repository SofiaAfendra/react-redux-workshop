const setPlayer1 = (player) => ({
  type: 'SET_PLAYER_1',
  payload: player,
});

const setPlayer2 = (player) => ({
  type: 'SET_PLAYER_2',
  payload: player,
});

// const resetPlayerState = () => ({
//   type: 'RESET_PLAYERS',
// });

export { setPlayer1, setPlayer2 };
