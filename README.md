# Agile Actors Academy

React Workshop!

## Description

Good work! Now that you have seen the basics in action, it's time and start refactoring. In this branch you will create the necessary action creators and use the gameReducer to update the game's state. Once you complete the tasks, you should be able to dispatch actions that will update your store's state. Your work will not yet be reflected in the UI, but can you check the results via the Redux Dev Tools.

## Branch Tasks

1. Start by creating `actions.js` file inside `models/game` and define action creators there. Action creators should return an action object with the type and payload properties, for each game related value (player1, xIsNext, winner... etc).

   > Hint: Each returned action should always have a type, but the payload property is not always necessary. The new action types should match the existing switch cases in `reducer.js`.

2. This is the point where you would need to define a reducer to handle your new actions, but there is a reducer already defined. However, it needs a final touch. All reducers need some initial state as their default state argument, otherwise they cannot calculate the new state.

3. Create a `rootReducer.js` file inside the `store` folder by using the gameReducer defined in `models/game/reducer.js`. This rootReducer should be an object with a key named `game` and the gameReducer as it's value.

4. Finally, to tie it all together, replace `initialTestState` and `testReducer` within `store/store.js`
   with `initialGameState` defined in `models/game/reducer.js` and the new `rootReducer`.

- Open Redux Dev Tools and try dispatching actions to check the results.

## File Structure

The project has the following file structure:

```bash
tic-tac-toe/
├── src/
│   ├── components/
│   │   ├── board/
│   │   │   ├── Board.jsx
│   │   │   ├── withBoardProps.jsx
│   │   │   └── ...
│   │   ├── game/
│   │   │   ├── Game.jsx
│   │   │   ├── withGameProps.jsx
│   │   │   └── ...
│   │   └── square/
│   │       ├── Square.jsx
│   │       └── ...
│   ├── ui-setup/
│   │   └──  UISetup.jsx
│   │
│   ├── libraries/
│   │   ├──  usePersistedState.js
│   │   └── ...
│   ├── models/
│   │   ├── game/
│   │   │   ├── reducer.js
│   │   │   ├── useGameState.js
│   │   │   └── ...
│   │   └── test/
│   │       ├── actions.js
│   │       └── reducer.js
│   ├── reactStore/
│   │   ├── stateProvider.js
│   │   └── store.js
│   ├── store/
│   │   ├── rootReducer.js
│   │   └── store.js
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   └── ...
│   ├── main.jsx
│   └──config.js
├── package.json
├── README.md
└── ...
```
