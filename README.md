# Agile Actors Academy

React Workshop!

## Description

Welcome to the Middlewares branch! In this stage, we'll be implementing middlewares into our application to add more functionality and flexibility to it. Specifically, we'll be focusing on persisting state to local storage using a middleware function.

## Middlewares

Middlewares are functions that have access to the Redux store's dispatch function. They can be used to perform actions before or after an action is dispatched, or even to stop the action from being dispatched altogether. Middlewares are a powerful tool that can be used to add functionality to Redux, such as logging, crash reporting, or persisting state to local storage.

## Branch Tasks

1. Begin by removing any unnecessary files from previous React implementations like the `useGameState.js` and `usePersistState.js` files.

2. Create a new file named `persistState.js`. This file will contain a function responsible for persisting our state to local storage. The function should take a key parameter and return an object with two properties:

   - `initialState`: This property will retrieve the initial state from local storage using the provided key, or an empty object if no state exists.
   - `persistStateMiddleware`: This property will define the middleware function responsible for updating the state in local storage after each Redux action.

3. Inside `store.js`, implement the `makeStore` function. This function should run the `persistState` function with the `PERSIST_KEY` key and return a configured Redux store using `configureStore`. Ensure to include the `persistStateMiddleware` in the middleware setup.

**Covers:**

- [Redux Middleware](https://redux.js.org/advanced/middleware)
- [Redux Persist](https://github.com/rt2zz/redux-persist)

## File Structure

The project should have the following file structure:

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
│   │   ├── game/
│   │   │   ├── index.js
│   │   │   ├── actions.js
│   │   │   ├── selectors.js
│   │   │   └── reducer.js
│   │   ├── players/
│   │   │   ├── index.js
│   │   │   ├── actions.js
│   │   │   ├── selectors.js
│   │   │   └── reducer.js
│   │   └── reactGame/
│   │   │   ├── index.js
│   │   │   ├── reducer.js
│   │   │   └── useGameState.js
│   │   └── index.js
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
