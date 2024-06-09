import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  player1,
  player2,
  winner,
  xIsNext,
  squares,
  setPlayer1,
  setPlayer2,
  setWinner, //
  setXIsNext,
  setSquares,
  resetGame,
  resetPlayers,
} from 'models';

export const useGameStore = () => {
  const dispatch = useDispatch();
  const setPlayer1Action = useCallback(
    (playerName) => dispatch(setPlayer1(playerName)),
    [dispatch],
  );
  const setPlayer2Action = useCallback(
    (playerName) => dispatch(setPlayer2(playerName)),
    [dispatch],
  );
  const setWinnerAction = useCallback(
    (winner) => dispatch(setWinner(winner)),
    [dispatch],
  );
  const setXIsNextAction = useCallback(
    (xIsNext) => dispatch(setXIsNext(xIsNext)),
    [dispatch],
  );
  const setSquaresAction = useCallback(
    (squares) => dispatch(setSquares(squares)),
    [dispatch],
  );
  const resetGameAction = useCallback(() => {
    dispatch(resetGame());
    dispatch(resetPlayers());
  }, [dispatch]);
  return {
    player1: useSelector(player1),
    player2: useSelector(player2),
    winner: useSelector(winner),
    xIsNext: useSelector(xIsNext),
    squares: useSelector(squares),
    setPlayer1: setPlayer1Action,
    setPlayer2: setPlayer2Action,
    setWinner: setWinnerAction,
    setXIsNext: setXIsNextAction,
    setSquares: setSquaresAction,
    resetGame: resetGameAction,
  };
};
