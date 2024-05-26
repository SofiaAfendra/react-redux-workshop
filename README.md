# Agile Actors Academy

React Workshop!

## Description

Good work! Now that you have seen the basics in action, it's time and start refactoring. In this branch you will create the necessary action creators and reducers to update the Redux store's state. You will be introduced to the combineReducers helper function, that turns different "slice reducer" functions into a single combined reducer. Once you complete the tasks, you should be able to dispatch actions that will update your store's state. Your work will not yet be reflected in the UI, but can you check the results via the Redux Dev Tools.

## Branch Tasks

1. Start by creating two new folders named `game` and `players` inside `models`. You will define two new separate reducers and action creators for each folder. These new reducers should each handle a slice of the tic-tac-toe's state, specifically the `game` slice handles _squares, xIsNext, winner_ and _reset_ and the `players` slice handles _player1_ and _player2_.

   - Each reducer folder should have an `index.js` file.
   - Each slice's `index.js` should export all actions and the reducer. And `models/index.js` should now also export everything from the slices' folders.

   ```bash
    models/
       ├── game/
       │    ├── index.js
       │    ├── actions.js
       │    └── reducer.js
       ├── players/
       │    └── ...
       ├── reactGame/
       │    └── ...
       └── index.js
   ```

2. Define action creators inside each slice's `actions.js` file. Action creators should return an action object with the type and payload properties, for each game related value.

   > - Each returned action should always have a type, but the payload property is not always necessary.
   > - A single action dispatch can trigger many reducers, as long as they have a switch case that mathces the action's type.

3. Define the `gameStateReducer` and `playerStateReducer` and an `initialState` for each, inside their respective `reducer.js` files. You can use `initialState` and `gameReducer` inside `models/reactGame/reducer.js` as a reference. Reducer functions need an initial state as their default state argument, otherwise they cannot calculate the new state.

4. Create a `rootReducer.js` file inside the `store` folder. There you will use the `combineReducers` function along with your slice reducers to define the `rootReducer`. The argument passed to combineReducers should be an object with the keys `game`, `players` and their respective reducers as their value.

5. Finally, replace `testReducer` with the new `rootReducer` in the arguments of `configureStore` inside `store/store.js`. The rootReducer already has an initial state, that is the combination of the initial states from `game` and `players` reducers. Meaning you can remove the proloadedState argument completely.

- Open Redux Dev Tools and try dispatching actions to check the results.

  ```
   # Update player 1
   {type: 'SET_PLAYER_1', payload: 'John'}

   # Update xIsNext
   {type: 'SET_X_IS_NEXT', payload: false}

   # Reset the state
   {type: 'RESET_GAME'}
  ```

## Covers

- [Redux - combineReducers](https://redux.js.org/api/combinereducers)

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
│   │   ├── square/
│   │   │   ├── Square.jsx
│   │   │   └── ...
│   │   ├── ui-setup/
│   │   └──  UISetup.jsx
│   ├── libraries/
│   │   ├──  usePersistedState.js
│   │   └── ...
│   ├── models/
│   │   ├── reactGame/
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
