import { gameStateReducer, playerStateReducer } from 'models';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  game: gameStateReducer,
  players: playerStateReducer,
});

export default rootReducer;
