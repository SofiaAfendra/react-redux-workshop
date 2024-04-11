# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will introduce the `useContext` React hook.

The `useContext` Hook and the **Context API** in general are crucial because they allow for easy sharing of data that can be considered "global" for a tree of React components. This includes authenticated user information, theme settings, preferred language, etc. In this case, the game state (player names, current squares, turn, winner) can be accessed by multiple components.

Without context, we would have to pass this data through props, which can get messy and inefficient as our app grows and data needs to be passed through many components. With context, we can access this data directly from any component without having to pass it down manually through props.

This makes the code cleaner, easier to maintain, and reduces the chance of errors. Furthermore, it can lead to performance improvements, as unnecessary re-renders can be avoided when state changes occur deep in the component tree.

## Branch Tasks

1. Create a new folder named _store_ in src. This folder will contain two files named _stateProvider.jsx_ and _store.js_.
2. In _store.js_, use the `createContext` hook to create a context object named `gameState` and extract the `Provider` from it.
3. Define a component named `StateProvider` in _stateProvider.jsx_.

   -It should expect the `persistKey` prop and return children wrapped in the `Provider`.
   -Move all game state from `withGameProps` HOC inside `StateProvider` (`initialState`, `usePersistState`, `useEffect` and all game state definitions).
   -Declare an object containing each state and it's setter function and pass it to the returned `Provider` as a prop.

4. Inside the returned component, use the `usePersistState` hook with the `initialState` to get the persisted state of the game.

> Hint: Update persisted state whenever any of the state variables change.

5. Define the `useGameState` custom hook in _stateProvider.jsx_.

   -Declare a variable `context` and initialize it using the `useContext` hook to subscribe to the `gameState` context.
   -Add a check to throw an error if `useGameState` was not called inside a component wrapped by `StateProvider`.

   > Hint: The check should use the value of context.

   -If the check is passed, this hook should return **context**.

6. In _main.jsx_, wrap the `Game` component with `StateProvider` and pass `PERSIST_KEY` as a prop. This makes the game state available in any component by using `useGameState`.
7. Extract the state from `gameState` context in `withGameProps`.

**Covers:**

- [React Hook - createContext](https://react.dev/reference/react/createContext)
- [React Hook - useContext](https://react.dev/reference/react/useContext)

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
- _src/store/_ contains the context provider used to share the game state across the application
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application.
