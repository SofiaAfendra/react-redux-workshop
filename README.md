# Agile Actors Academy

React Workshop

## Description

Welcome to the Redux section of this training, where you will gradually refactor the way the application's state is managed. In this branch you will be introduced to the core concepts that make a Redux app tick. You have been provided with a _test_ folder inside _models_ containing:

1.  The _actions.js_ file where _testAction_ is defined. It returns an action object with the type "TEST_ACTION".
2.  The _reducer.js_ where an initial state and _testReducer_ are defined. When testReducer runs with a state and an action as arguments, it will update the state depending on the action type and the state's previous values.

**Branch Tasks:**

1.  Create a folder named _store_ and use the [configureStore](https://redux-toolkit.js.org/api/configureStore) method to setup a Redux store. Use the provided _testReducer_ and initialState defined inside _models/test/reducer.js_. This way whenever the action with type "TEST_ACTION" is dispatched to the store, it will run testReducer to update the global state of the app.
    > Note: The `store` folder from previous branches, has been renamed to `reactStore`.
2.  Create a component named _UISetup.jsx_, it should return the Redux _[Provider](https://react-redux.js.org/api/provider)_ component that makes the Redux store available to it's children. Since _StateProvider_ is also responsible for making the persistedState available to it's children, move it here from _main.jsx_ and wrap the _Provider_. These components have similar concerns, so grouping them will make the code cleaner.
3.  Now use _UISetup.jsx_ to wrap the _Game_ component inside _main.jsx_, to complete the new setup.
4.  Add the [Redux Dev Tools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) browser extension and explore it's many features.

- Open Redux Dev Tools and try dispatching a Custom action with type "TEST_ACTION", to watch that state update with each dispatch.

**Covers:**

- [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Flux architectural pattern](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/)
