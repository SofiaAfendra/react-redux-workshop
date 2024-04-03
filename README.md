# Agile Actors Academy

React Workshop

**Branch Tasks:**

1. Inside `actions.js` define and export all tic-tac-toe related actions, they should return action objects with the type and payload properties.

   > Hint: Each action should always return a type, but the payload is not always necessary.

2. Inside `store/store.js`
   replace `initialTestState` and `testReducer` with `initialGameState` and `gameReducer` from `models/game/reducer.js`.
3. Inside store folder, create `rootReducer.js` and define a rootReducer using the reducer.js.

   > NOTE: _The reducer at `game/reducer.js` return an Object with property type and optionally a property payload so we can reuse it at our Redux store._

- Open Redux Dev Tools and try dispatching an action.
