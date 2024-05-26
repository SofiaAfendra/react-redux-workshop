import {
  gameReducer,
  gameSliceName,
  playerSliceName,
  playerReducer,
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
