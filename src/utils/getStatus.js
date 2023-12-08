/*
 * Utility function that take as input the 'winner' and return the status of the game when the game has finished.
 */


export const getStatus = (winner, player1, player2) => {
  if (winner === 'X') {
    return `Winner is: ${player1}`;
  }
  if (winner === 'O') {
    return `Winner is: ${player2}`;
  }
  return 'Draw...';
};



