import { gameReducer } from '@/models';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */
const rootReducer = {
  game: gameReducer,
};

export default rootReducer;
