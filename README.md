# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will refactor the state management of the game from the `useState` hook to the `useReducer` hook.

The `useReducer` hook in React is a function that accepts a **reducer** function and an **initial state** as arguments, and returns the **current state** paired with a **dispatch** method. The reducer function is similar to how reducers work in _Redux_. This makes useReducer excellent for handling complex state logic that involves multiple sub-values or when the next state depends on the previous one.

## Why is this useful?

The importance of useReducer lies in its ability to handle complex state transitions and encapsulate the logic for state updates, making the code more predictable and easier to test. It also allows for more optimized performance for components that trigger deep updates because you can pass dispatch down instead of callbacks. Furthermore, it makes the state changes more explicit and easier to understand, which can be particularly beneficial in a large application where state changes frequently and in complex ways.

## Branch Tasks

1. Create a new folder named _models_ and another folder named _game_ inside it.
2. In the _game_ folder, create files named _useGameState.js_, _reducer.js_ and an _index.js_ to export them.

   -Move `useGameState` hook definition from _stateProvider.jsx_ to _useGameState.js_.
   -Move the `initialState` definition to _reducer.js_ and define a function named `gameReducer` that accepts a state and an action as arguments. Use a switch case against the action argument.

   > Hint: Should have the same amount of switch cases as there were setter function invocations in `withGameProps`.

3. In _stateProvider.jsx_, replace all `useState` hooks with the `useReducer` hook and update `useEffect` and `value` prop accordingly.
4. Finally in _withGameProps.jsx_, extract state and dispatch from `useGameState` and replace previous state management by calling `dispatch` with the appropriate type and payload.

**Covers:**

- [React hook - useReducer](https://react.dev/reference/react/useReducer)

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
│   │   └── square/
│   │       ├── Square.jsx
│   │       └── ...
│   ├── libraries/
│   │    ├── usePersistState.js
│   │    └── ...
│   ├── models/
│   │   └── game/
│   │       ├── reducer.js
│   │       ├── useGameState.js
│   │       └── ...
│   ├── store/
│   │   ├── stateProvider.jsx
│   │   ├── store.js
│   │   └── ...
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   └── ...
│   ├── config.js
│   └── main.jsx
├── package.json
├── README.md
└── ...
```

- _src/_ contains the source code for the project
- _src/components/_ contains the React components used to build the game and the HOCs used to provide props to presentational components
- _src/libraries/_ contains the custom hook used to persist the game state to local storage
- _src/models/game/_ contains the context and reducer used to manage the game state
- _src/store/_ contains the context provider used to share the game state across the application
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application.
