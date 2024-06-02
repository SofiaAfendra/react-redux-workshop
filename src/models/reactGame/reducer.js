export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER1':
      return {
        ...state,
        player1: action.payload,
      };
    case 'SET_PLAYER2':
      return {
        ...state,
        player2: action.payload,
      };
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
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
