export const initialState = {
  player1: '',
  player2: '',
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};
// TODO: refactor reducer with createslice from Redux toolkit
export const gameReducer = (state = initialState, action) => {
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
