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

const resetGame = () => ({
  type: 'RESET_GAME',
});

export { setSquares, setWinner, setXIsNext, resetGame };
