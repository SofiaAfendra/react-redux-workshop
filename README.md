# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, you will be introduced to the useContext React hook.

Context in React is crucial for managing global data that need to be shared across components. In this case,
the game state (player names, current squares, turn, winner) can be accessed by multiple components.

Context helps avoid prop drilling and without context, we'd need to pass the game state as props through each level of the component tree.

**Branch Task:**

1. Create a new folder named **store** in src. This folder will contain two files named **stateProvider.jsx** and **store.js**.
2. In store.js, use the createContext hook to create a context object named **gameState** and extract the **Provider** from it.
3. Define a component named **StateProvider** in **stateProvider.jsx**.

   -It should expect the persistKey prop and return children wrapped in the Provider.

   -Move all game state from withGameProps HOC inside **StateProvider** (initialState, usePersistState, useEffect and all game state definitions).

   -Declare an object containing each state and it's setter function and pass it to the retuned Provider as a prop.

4. Define the **useGameState** custom hook in **stateProvider.jsx**.

   -Declare a variable **context** and initialize it using the useContext hook to subscribe to the gameState context.
   -Add a check to throw an error if **useGameState** was not called inside a component wrapped by **StateProvider**.

   > Hint: The check should use the value of context.

   -If the check is passed, this hook should return **context**.

5. In main.jsx, wrap the Game component with StateProvider and pass PERSIST_KEY as a prop. This makes the game state available in any component by using useGameState
6. Extract the state from gameState context in withGameProps.

**Covers:**

- [React Hook - createContext](https://react.dev/reference/react/createContext)
- [React Hook - useContext](https://react.dev/reference/react/useContext)
