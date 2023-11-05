const setPlayer1 = (player) => ({
  type: 'SET_PLAYER_1',
  payload: player,
});

const setPlayer2 = (player) => ({
  type: 'SET_PLAYER_2',
  payload: player,
});

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

export { setPlayer1, setPlayer2, setSquares, setWinner, setXIsNext, resetGame };
