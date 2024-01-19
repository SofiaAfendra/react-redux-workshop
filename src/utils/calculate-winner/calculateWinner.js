/*
Utility function that takes as input the 'squares' and returns the symbol that
wins (X or O), null if there is no winner and 'Draw' if it is a draw.
*/

export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = lines.reduce((winner, line) => {
    const [a, b, c] = line;

    if (winner) {
      return winner;
    }

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

    return null;
  }, null);

  const gameComplete = squares.reduce((complete, square) => {
    if (!square) {
      return false;
    }

    return complete;
  }, true);

  return gameComplete && !winner ? 'draw...' : winner;
};
