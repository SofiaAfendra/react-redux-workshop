const player1 = (state) => state.game.player1;
const player2 = (state) => state.game.player2;
const winner = (state) => state.game.winner;
const xIsNext = (state) => state.game.xIsNext;
const squares = (state) => state.game.squares;

export { player1, player2, winner, xIsNext, squares };
