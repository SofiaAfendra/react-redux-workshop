export const initialPlayerState = {
  player1: '',
  player2: '',
};

export const playerStateReducer = (state = initialPlayerState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_1':
      return {
        ...state,
        player1: action.payload,
      };
    case 'SET_PLAYER_2':
      return {
        ...state,
        player2: action.payload,
      };
    case 'RESET_GAME':
      //   return {
      //     ...initialPlayerState,
      //   };case 'RESET_GAME':
      return {
        ...initialPlayerState,
      };
    default:
      return state;
  }
};
