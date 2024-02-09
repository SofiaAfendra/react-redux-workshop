# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, you will be introduced to the concept of lifting state up. Your goal is to move the state for the **Square** component inside the new **Board** component.

**Branch Task:**

1. Create a new folder named **models** and another folder named **game** inside it.
2. In the game folder, create files named **useGameState.js**, **reducer.js** and an **index.js** to export them.

   -Move useGameState hook definition from stateProvider.jsx to useGameState.js

   -Move the initialState definition to reducer.js and define a function named gameReducer that accepts a state and an action as arguments. Use a switch case against the action argument.

   > Hint: Should have the same amount of switch cases as there were setter function invocations in withGameProps.

3. In stateProvider.jsx, replace all useState hooks with the useReducer hook and update useEffect and value prop accordingly.
4. Finally in withGameProps.jsx, extract state and dispatch from useGameState and replace previous state management by calling dispatch with the appropriate type and payload.

**Covers:**

- [React hook - useReducer](https://react.dev/reference/react/useReducer)
