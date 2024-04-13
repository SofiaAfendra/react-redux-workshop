# Agile Actors Academy

React Workshop

## Description

Nicely done! Now it's time to kick it up a notch. In this branch you will connect the Game component to the Redux store and replace the previous logic and functionality. This will be achieved by using the compose and connect function, to merge the Redux store's state and action dispatching functions with the Game React component. Additionally, you will be introduced to the pronciple of the selector functions that contribute to good Redux architecture keeping state minimal. After you complete the tasks, you should be able to access and update the Redux store's state through the UI.

**Branch Tasks:**

1. First create a new file inside _models/game_ named _selectors.js_, this is where you will define the new selectors. A selector is a function that accepts the state as an argument and returns the specified piece of data from that state. Now define a selector for each game related variable and export them, in order to make the values easier to access.

2. Inside the _Game_ component, define _mapStateToProps_ using the new selector functions. It should be a function that accepts the state and returns an object holding each game related value.

3. Inside the same folder, define _mapDispatchToProps_, it should be an object holding all action dispatching functions.

4. connect mapStateToProps, mapDispatchToProps and withGameProps. It provides withGameProps with pieces of data passed and the functions to dispatch actions to the store. Return a HOC that wraps the component that was passed and merges it's props with mapStateToProps and mapDispatchToProps.

const Game = compose(
connect(mapStateToProps, mapDispatchToProps),
withGameProps,
)(GameComponent);

5. Previously we were using the useGameState hook to make dispatch and state available inside the Game component. Now that we have the new setup is time to replace any dispatch calls with their respective actions.

**Covers:**

- [Selectors](https://redux.js.org/usage/deriving-data-selectors)
- [Connect](https://react-redux.js.org/api/connect)
<!-- Compose page from docs is pretty meh maybe find another resource, or just add explanation here in README -->
- [Compose](https://redux.js.org/api/compose)
