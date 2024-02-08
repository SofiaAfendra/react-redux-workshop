# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, you will be introduced to the useContext React hook.

Context in React is crucial for managing global data that need to be shared across components. In this case,
the game state (player names, current squares, turn, winner) can be accessed by multiple components.

Context helps avoid prop drilling and without context, we'd need to pass the game state as props through each level of the component tree.

**Branch Task:**

1. Create a new folder named **store** in src. This folder will contain two files named **stateProvider.jsx** and **store.js**.
2. In store.js, use createContext to create a context object named **gameState** and extract the **Provider** from it.
3. Define a component named **StateProvider** in **stateProvider.jsx** that accepts the persistKey as props, returns the Provider and inside:
   -Move the initialState object from withGameProps.
   -Use usePersistedState hook to get the game's state.
   -Use useState to define states for player1, player2, xIsNexr, squares, winner.
   -Pass an object containing each state to the retuned Provider.
   > Hint: This component wraps its children with the Provider, making the game state accessible to its descendants.
4. In the same file, define the useGameState hook that uses the useContext hook to access the gameState context.
5. Add an error check in useGameState, that throws an error if the hook was used in a component unested by StateProvider.
6. In main.jsx, wrap the Game component with StateProvider. This makes the game state available in any component by using useGameState
7. Extract the state from gameState context in withGameProps and refactor previous logic.

**Covers:**

- [React Hook - useContext](https://react.dev/reference/react/useContext)
- [Prop Drilling](https://dev.to/codeofrelevancy/what-is-prop-drilling-in-react-3kol)
