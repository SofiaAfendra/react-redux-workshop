import { gameReducer, playerReducer } from 'models';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */
const rootReducer = {
  game: gameReducer,
  players: playerReducer,
};

export default rootReducer;
