const setSquares = (squares) => ({
  type: 'SET_SQUARES',
  payload: squares,
});

const setWinner = (winner) => ({
  type: 'SET_WINNER',
  payload: winner,
});

const setXIsNext = (xIsNext) => ({
  type: 'SET_X_IS_NEXT',
  payload: xIsNext,
});

const resetGameState = () => ({
  type: 'RESET_GAME',
});

export { setSquares, setWinner, setXIsNext, resetGameState };
