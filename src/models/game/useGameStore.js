import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { player1, player2, winner, xIsNext, squares } from './selectors';
import {
  setPlayer1,
  setPlayer2,
  setWinner, //
  setXIsNext,
  setSquares,
  resetGame,
} from './actions';

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
  const resetGameAction = useCallback(() => dispatch(resetGame()), [dispatch]);
  return {
    player1,
    player2,
    winner,
    xIsNext,
    squares,
    setPlayer1: setPlayer1Action,
    setPlayer2: setPlayer2Action,
    setWinner: setWinnerAction,
    setXIsNext: setXIsNextAction,
    setSquares: setSquaresAction,
    resetGame: resetGameAction,
  };
};
