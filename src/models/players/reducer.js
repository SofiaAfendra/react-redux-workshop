const initialState = {
  player1: '',
  player2: '',
};

export const playerReducer = (state = initialState, action) => {
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
    case 'RESET_PLAYERS':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
