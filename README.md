# Agile Actors Academy

React Workshop!

## Description

Nicely done! Now it's time to kick it up a notch. In this branch you will connect the Redux store's state and action dispatching functions to the `Game` and `Board` components. You will be introduced to `selector` functions, that contribute to cleaner code, and the `connect` and `compose` functions.

- The `connect` function connects the component with the Redux store. It's a curried function that at first takes as parameters the `mapStateToProps` (parts of state we require) and `mapDispatchToProps` (actions that we may require) functions, and then returns a function that takes the component as an argument. The resulting function is the connected component. The connected component will have access to the state and actions passed as props.
- The `compose` function is a utility functions that accepts functions as arguments and returns a single function by composing them from right to left.

You will mix everything together and create the enhanced `Game` and `Board` components that combine the new Redux-connected HOC with the `withGameProps` and `withBoardProps` HOCs. The resulting components will have access to the props of all HOCs, and after some refactoring, you should be able to use the Redux store's state through the UI.

## Branch Tasks

1. First create a new file inside _models/game_ and _models/players_ named _selectors.js_, this is where you will define the new selectors. A selector is a function that accepts the store's state as an argument and returns the specified piece of data from that state. Now define a selector for each game and player related value and export them.

   > Note: Using selector functions will reduce the amount of code needed to access state values.

2. Inside the _Game.jsx_ file, but outside the `Game` component, define `mapStateToProps` using the new selector functions. It should be a function that accepts the state and returns an object holding each game related value.
3. Inside the same file, define `mapDispatchToProps`, it should be an object holding action dispatching functions.
4. Wrap the `Game` component, using the compose function with the following arguments:

   - First, the invocation of the connect function with `mapStateToProps` and `mapDispatchToProps` as arguments, containing everything Redux related.
   - Then the `withGameProps` HOC, containing some additional props.
     > Note: The resulting `Game` component, accepts the props of the Redux-connected HOC and `withGameProps` HOC.

5. Replace any state and dispatch from `useGameState` with the props available from the new enhanced HOC. Also, keep in mind that some props passed to the WrappedComponent returned by `withGameProps` are already accessible due to the Redux-connected HOC. Remove any such unnecessary prop.
6. Follow the same steps for the `Board` component.

**Covers:**

- [Selectors](https://redux.js.org/usage/deriving-data-selectors)
- [Connect](https://react-redux.js.org/api/connect)
- [Compose](https://redux.js.org/api/compose)

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
│   │   │   └── reducer.js
│   │   ├── players/
│   │   │   ├── index.js
│   │   │   ├── actions.js
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
