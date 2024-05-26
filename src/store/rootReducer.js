import {
  gameSliceName,
  gameReducer,
  playerReducer,
  playerSliceName,
} from 'models';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */
const rootReducer = {
  [gameSliceName]: gameReducer,
  [playerSliceName]: playerReducer,
};

export default rootReducer;
