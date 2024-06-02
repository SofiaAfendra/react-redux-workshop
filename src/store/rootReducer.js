import { gameReducer, playerReducer } from 'models';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  game: gameReducer,
  players: playerReducer,
});

export default rootReducer;
