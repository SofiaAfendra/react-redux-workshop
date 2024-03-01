# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will introduce the `useContext` React hook.

The `useContext` Hook and the **Context API** in general are crucial because they allow for easy sharing of data that can be considered "global" for a tree of React components. This includes authenticated user information, theme settings, preferred language, etc. In this case, the game state (player names, current squares, turn, winner) can be accessed by multiple components.

Without context, we would have to pass this data through props, which can get messy and inefficient as our app grows and data needs to be passed through many components. With context, we can access this data directly from any component without having to pass it down manually through props.

This makes the code cleaner, easier to maintain, and reduces the chance of errors. Furthermore, it can lead to performance improvements, as unnecessary re-renders can be avoided when state changes occur deep in the component tree.

**Branch Task:**

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
