import { gameReducer, gameName, playersName, playersReducer } from 'models';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */
const rootReducer = {
  [gameName]: gameReducer,
  [playersName]: playersReducer,
};

export default rootReducer;
