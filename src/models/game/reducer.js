export const initialGameState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

export const gameReducer = (state = initialGameState, action) => {
  console.log('reducer', state);
  switch (action.type) {
    case 'SET_SQUARES':
      return {
        ...state,
        squares: action.payload,
      };
    case 'SET_X_IS_NEXT':
      return {
        ...state,
        xIsNext: action.payload,
      };
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.payload,
      };
    case 'RESET_GAME':
      return {
        ...initialGameState,
      };
    default:
      return state;
  }
};
