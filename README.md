# Agile Actors Academy

React Workshop

## Description

Welcome to the Redux section of this training, where you will gradually refactor the way the application's state is managed. In this branch you will be introduced to the core concepts that make a Redux app tick. You have been provided with the following:

1.  Inside _models/test/actions_ the _testAction_ is defined. It returns an action object with the type "TEST_ACTION".
2.  Inside _models/test/reducer_ an initial state and _testReducer_ are defined. When testReducer runs with a state and an action as arguments, it will update the state depending on the action type and the state's previous values.
3.  Inside _store_ the new store is configured using _testReducer_ and initialState defined in the _reducer_ folder. This way whenever the action with type "TEST_ACTION" is dipatched to the store, it will run testReducer to update the global state of the app.
    > Note: The `store` folder from previous branches, has been renamed to `reactStore`.
4.  Inside _ui-setup_ the _UISetup.jsx_ component is defined. It returns the _Provider_ component that makes the Redux store available to any nested components. This component wraps the _Game_ component in _main.jsx_.

This setup is very basic and does not affect any of the previous tic-tac-toe functionality or UI, it only serves as a simple example of how Redux works. Follow the next steps to gain some familiarity with this new pattern, before moving on to the main tasks.

**First steps:**

- Add the [Redux Dev Tools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) browser extension and explore it's many features.
- Try dispatching a Custom action with type "TEST_ACTION" and watch that state update with each dispatch.

**Branch Tasks:**

1. Create a new folder named _gameRedux_ inside _models_. This is where you will create _actions.js_ and _reducer.js_.
2. Inside _actions.js_ define and export all tic-tac-toe related actions, they should return action objects with the type and payload properties.
   > Hint: Each action should always return a type, but the payload is not always necessary.
3. Inside _reducer.js_ define the initialGameState and the gameReduxReducer to handle your new actions, according to their type and payload.
4. Inside _store/store.js_ replace initialTestState and testReducer with initialGameState and gameReduxReducer from _models/gameRedux/reducer.js_.
5. Use Redux Dev Tools to dispatch Custom actions and confirm everything works correctly.

**Covers:**

- [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Provider](https://react-redux.js.org/api/provider)
- [Flux architectural pattern](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/)
