# Agile Actors Academy

React Workshop

## Description

Welcome to the Redux section of this training, where you will gradually refactor the way the application's state is managed. In this branch you will be introduced to the core concepts that make a Redux app tick. You have been provided with the following:

1.  Inside **models/test/actions** the testAction is defined. It returns an action object with the type "TEST_ACTION".
2.  Inside **models/test/reducer** an initial state and testReducer are defined. When testReducer runs with a state and an action as arguments, it will update the state depending on the action type and the state's previous values.
3.  Inside **store** the new store is configured using testReducer and initialState defined in the **reducer** folder. This way whenever the action with type "TEST_ACTION" is dipatched to the store, it will run testReducer to update the global state of the app.
    > Note: The **store** folder from previous branches, has been renamed to **reactStore**.

This setup is very basic and does not affect any of the previous tic-tac-toe functionality or UI, it only serves as a simple example of how Redux works. Follow the next steps to gain some familiarity with this new pattern, before moving on to the main tasks.

**First steps:**

- Add the [Redux Dev Tools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) browser extension and explore it's many features.
- Try dispatching a Custom action with type "TEST_ACTION" and watch that state update, with each dispatch.

**Branch Tasks:**
