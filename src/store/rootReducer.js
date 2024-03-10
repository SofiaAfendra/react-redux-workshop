import { gameReducer, name } from 'models';

/**
 * Root reducer
 *
 * @description Combine all reducers
 *
 */
const rootReducer = {
  [name]: gameReducer,
};

export default rootReducer;
