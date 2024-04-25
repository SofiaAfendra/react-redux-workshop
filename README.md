# Agile Actors Academy

React Workshop!

## Description

Nicely done! Now it's time to kick it up a notch. In this branch you will connect the Redux store's state and action dispatching functions to the `Game` component. You will be introduced to the principle of `selector functions`,that contribute to good Redux architecture and cleaner code, and the `connect` and `compose` functions.

- The `connect` function connects the component with the Redux store. It's a curried function that at first takes as parameters the `mapStateToProps` (parts of state we require) and `mapDispatchToProps` (actions that we may require) functions, and then returns a function that takes the component as an argument. The resulting function is the connected component. The connected component will have access to the state and actions passed as props.
- The `compose` function is a utility functions that accepts functions as arguments and returns a single function by composing them from right to left.

You will mix everything together and create an enhanced `Game` HOC that combines the new Redux-connected HOC with the withGameProps HOC. The resulting component will have access to the props of both HOCs, and after some refactoring, you should be able to use the Redux store's state through the UI.

## Branch Tasks

1. First create a new file inside `models/game` named `selectors.js`, this is where you will define the new selectors. A selector is a function that accepts the state as an argument and returns the specified piece of data from that state. Now define a selector for each game related variable and export them.

   > Note: Using selector functions will reduce the amount of code needed to access state values.

2. Inside the `Game.jsx` file, but outside the `Game` component, define `mapStateToProps` using the new selector functions. It should be a function that accepts the state and returns an object holding each game related value.

3. Inside the same file, define `mapDispatchToProps`, it should be an object holding action dispatching functions.

4. Rename the `Game` component inside `Game.jsx` to `GameComponent`. You will instead use `Game` to define the new enhanced HOC that will wrap `GameComponent`.

5. Define an enhanced HOC named `Game`, using the compose function with the following arguments:

   - First, the invocation of the connect function with `mapStateToProps` and `mapDispatchToProps` as arguments, containing everything Redux related.
   - Then the withGameProps HOC, containing some additional props.
   - Finally, since compose returns a function, immediately invoke it with `GameComponent` as the argument.
     > Note: The resulting Game component, combines the props of the Redux-connected HOC and withGameProps and passes them to GameComponent.

6. Replace any state and dispatch from useGameState with the props available from the new enhanced HOC. Also, keep in mind that some props passed to the WrappedComponent returned by `withGameProps` are already accessible due to the Redux-connected HOC. Remove any such unnecessary prop.

## Covers

- [Selectors](https://redux.js.org/usage/deriving-data-selectors)
- [Connect](https://react-redux.js.org/api/connect)
- [Compose](https://redux.js.org/api/compose)

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
│   │   │   ├── actions.js
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
