import { gameSliceName, gameReducer } from 'models';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */
const rootReducer = {
  [gameSliceName]: gameReducer,
};

export default rootReducer;
