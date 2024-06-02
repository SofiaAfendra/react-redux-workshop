const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

export const gameStateReducer = (state = initialState, action) => {
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
        ...initialState,
      };
    default:
      return state;
  }
};
