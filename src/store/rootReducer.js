import { gameReducer, playerReducer } from 'models';
import { combineReducers } from 'redux';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */

const rootReducer = combineReducers({
  game: gameReducer,
  players: playerReducer,
});

export default rootReducer;
