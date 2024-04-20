# Agile Actors Academy

React Workshop

## Description

Nicely done! Now it's time to kick it up a notch. In this branch you will connect the Redux store's state and action dispatching functions to the _Game_ component. You will be introduced to principle of _selector functions_,that contribute to good Redux architecture and cleaner code, and the _connect_ and _compose_ fuctions. The _connect_ function returns a Redux-connected HOC that wraps a React component and passes any piece of the Redux store's state and any action dispatching function as props. The _compose_ function is a utility functions that accepts functions as arguments and returns a single function by composing them from right to left. You will combine everything to create an enhanced _Game_ component by composing the new Redux-connected HOC and the withGameProps HOC. The resulting component will have access to the props of both HOCs, and after some refactoring, you should be able to use the Redux store's state through the UI.

**Branch Tasks:**

1. First create a new file inside _models/game_ named _selectors.js_, this is where you will define the new selectors. A selector is a function that accepts the state as an argument and returns the specified piece of data from that state. Now define a selector for each game related variable and export them.

   > Note: Using selector functions will reduce the amount of code needed to access state values.

2. Inside the _Game.jsx_ file, but outside the _Game_ component, define _mapStateToProps_ using the new selector functions. It should be a function that accepts the state and returns an object holding each game related value.

3. Inside the same file, define _mapDispatchToProps_, it should be an object holding action dispatching functions.

4. Rename the _Game_ component inside _Game.jsx_ to _GameComponent_. You will instead use _Game_ to define the new enhanced HOC that will wrap _GameComponent_.

5. Define an enhanced HOC named _Game_, using the compose function with the following arguments:

   - First, the invocation of the connect function with _mapStateToProps_ and _mapDispatchToProps_ as arguments, containing everything Redux related.
   - Then the withGameProps HOC, containing some additional props.
   - Finally, since compose returns a function, immediately invoke it with _GameComponent_ as the argument.
     > Note: The resulting component Game, combines the props of the Redux-connected HOC and withGameProps and passes them to GameComponent.

6. Replace any state and dispatch from useGameState with the props available from the new enhnaced HOC. Also, keep in mind that some props passed to the WrappedComponent returned by _withGameProps_ are already accessible due to the Redux-connected HOC. Remove any such unnecessary prop.

**Covers:**

- [Selectors](https://redux.js.org/usage/deriving-data-selectors)
- [Connect](https://react-redux.js.org/api/connect)
- [Compose](https://redux.js.org/api/compose)
