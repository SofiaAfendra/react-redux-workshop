# Agile Actors Academy

React Workshop!

## Description

Welcome to the Redux section of this training, where you will gradually refactor the way the application's state is managed. In this branch you will be introduced to the core concepts that make a Redux app tick. You have been provided with a `test` folder inside `models` containing:

1.  The `actions.js` file where `testAction` is defined. It returns an action object with the type "TEST_ACTION".
2.  The `reducer.js` where an initial state and `testReducer` are defined. When testReducer runs with a state and an action as arguments, it will update the state depending on the action type and the state's previous values.

## What is Redux and why use it?

Redux is a library that manages the state of your Javascript application, and it is often used with React to create a single source of truth for your app's state. It is particularly handy when your app has a lot of state that needs to be shared between different components, as it allows you to manage the state in a predictable way, keep its consistency, and make it easier to debug and test.

## The Flux Architecture

Redux is based on the Flux architecture, which is a pattern for managing the state of your application. It has four main components:

1.  **Actions**: These are payloads of information that send data from your application to the store. They are the only source of information for the store.
2.  **Reducers**: These are functions that specify how the state of your application changes in response to an action. They take the current state and an action as arguments, and return the new state.
3.  **Store**: This is the object that holds the state of your application.
4.  **Views**: These are the components that display the state of your application. They subscribe to the store, and are notified whenever the state changes.

## What is a Redux Store?

The Redux store is a single object that holds the state of your application. It is the only way to change the state inside it, by dispatching actions to it. The store is created using the `createStore` method from the Redux library, and it is passed a reducer function that will update the state based on the actions dispatched to the store.

## Branch Tasks

1.  Create a folder named `store` and use the [configureStore](https://redux-toolkit.js.org/api/configureStore) method to setup a Redux store. Use the provided `testReducer` and initialState defined inside `models/test/reducer.js`. This way whenever the action with type "TEST_ACTION" is dispatched to the store, it will run testReducer to update the global state of the app.
    > Note: The `store` and _models/_`game` folder from previous branches, have been renamed to `reactStore` and `reactGame`.
2.  Create a component named `UISetup.jsx`, it should return the Redux [Provider](https://react-redux.js.org/api/provider) component that makes the Redux store available to it's children. Since `StateProvider` is also responsible for making the persistedState available to it's children, move it here from `main.jsx` and wrap the `Provider`. These components have similar concerns, so grouping them will make the code cleaner.
3.  Now use `UISetup.jsx` to wrap the `Game` component inside `main.jsx`, to complete the new setup.
4.  Add the [Redux Dev Tools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) browser extension and explore it's many features.
5.  Open Redux Dev Tools and try dispatching a custom action with type "TEST_ACTION", to watch that state update with each dispatch.

**Covers:**

- [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Flux architectural pattern](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/)

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
│   │   └── square/
│   │       ├── Square.jsx
│   │       └── ...
│   ├── libraries/
│   │   ├──  usePersistedState.js
│   │   └── ...
│   ├── models/
│   │   ├── reactGame/
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
