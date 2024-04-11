# Agile Actors Academy

React Workshop

## Description

Good work! Now it's time to kick it up a notch and start the refactoring. In this branch you will create the necessary action creators and use the gameReducer to update the game's state. Once you complete the tasks, you should be able to dispatch actions that will update your store's state. Your work will not yet be reflected in the UI, but can you check the results via the Redux Dev Tools.

**Branch Tasks:**

1. Start by creating _actions.js_ file inside _models/game_ and define action creators there. Action creators should return an action object with the type and payload properties, for each game ralated value (player1, xIsNext, winner... etc).

   > Hint: Each returned action should always have a type, but the payload property is not always necessary.

2. Inside _store/store.js_
   replace _initialTestState_ and _testReducer_ with _initialGameState_ and _gameReducer_ from _models/game/reducer.js_.
3. Inside store folder, create _rootReducer.js_ and define a rootReducer using the reducer.js.

   > NOTE: _The reducer at \_game/reducer.js_ return an Object with property type and optionally a property payload so we can reuse it at our Redux store.\_

- Open Redux Dev Tools and try dispatching an action.
