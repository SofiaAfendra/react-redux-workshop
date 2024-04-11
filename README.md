# Agile Actors Academy

React Workshop

## Description

Good work! Now it's time to kick it up a notch and start the refactoring. In this branch you will create the necessary action creators and use the gameReducer to update the game's state. Once you complete the tasks, you should be able to dispatch actions that will update your store's state. Your work will not yet be reflected in the UI, but can you check the results via the Redux Dev Tools.

**Branch Tasks:**

1. Start by creating _actions.js_ file inside _models/game_ and define action creators there. Action creators should return an action object with the type and payload properties, for each game related value (player1, xIsNext, winner... etc).

   > Hint: Each returned action should always have a type, but the payload property is not always necessary. The new action types should match the existing switch cases in _reducer.js_

2. Create a _rootReducer.js_ file inside the _store_ folder by using the gameReducer defined in _models/game/reducer.js_. This rootReducer should be an object with a key named _game_ and the gameReducer as it's value.

3. Finally, to tie it all together, replace _initialTestState_ and _testReducer_ within _store/store.js_
   with _initialGameState_ defined in _models/game/reducer.js_ and the new _rootReducer_.

- Open Redux Dev Tools and try dispatching actions to check the results.
