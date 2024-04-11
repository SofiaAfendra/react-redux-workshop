# Agile Actors Academy

React Workshop!

## Branch Description

Now that we have established the Redux knowledge, let's use an already known library to make our lives a lot simpler.

The library's name is redux-toolkit. We have used it in a previous lecture to create the store using `configureStore()`.

## Why use Redux Toolkit (RTK)?

Redux Toolkit (also known as "RTK" for short) is Redux's official recommended approach for writing Redux logic. The _@reduxjs/toolkit_ package wraps around the core redux package, and contains API methods and common dependencies that are essential for building a Redux app.

Redux Toolkit builds in Redux's suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

## Why use Redux Toolkit instead of Redux?

- Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to.
- It eliminates accidental mutations, which have always been the #1 cause of Redux bugs.
- It eliminates the need to write any action creators or action types by hand.
- It eliminates the need to write manual and error-prone immutable update logic.
- It makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files.
- RTK also offers excellent TS support, with APIs that are designed to give you type safety and minimize the number of types you have to define in your code.
- Finally, RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state.

## Branch Tasks

Since the store configuration is ready your goal for this branch is to do some minor tweeks and transform your plain Redux with redux-toolkit.

1. We recommend you start with the docs: https://redux-toolkit.js.org/tutorials/quick-start.
2. Transform your reducers using the redux-toolkit logic and the `createSlice()` function.

> **Hint:** `createSlice()` accepts an object with a name, initialState, and reducers. The name is a string used to generate action type strings, and the reducers object is a collection of reducer functions. Each reducer function is created with a "builder callback" API that lets you write mutable logic, and it automatically generates the correct immutable update logic for you.

3. Your actions should be coming from the slice you created.
4. Update your store file.

**Covers:**

- [Reducers and Actions - createSlice](https://redux-toolkit.js.org/api/createSlice)

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
│   │   │     ├── Square.jsx
│   │   │     └── ...
│   │   └── ui-setup/
│   │       ├── UISetup.jsx
│   │       └── ...
│   ├── libraries/
│   │   └─ persist-middleware/
│   │       ├── persistState.js
│   │       └── ...
│   ├── models/
│   │   └── game/
│   │       ├── actions.js
│   │       ├── reducer.js
│   │       ├── selectors.js
│   │       └── ...
│   ├── store/
│   │   ├── rootReducer.js
│   │   └── store.js
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   └── ...
│   ├── config.js
│   └── main.jsx
├── package.json
├── README.md
└── ...
```

- _src/_ contains the source code for the project
- _src/components/_ contains the React components used to build the game and the HOCs used to provide props to presentational components
- _src/libraries/persist-middleware/_ contains the custom middleware implementation
- _src/models/game/_ contains the redux reducer, actions and selectors for the game
- _src/store/_ contains the configuration for the redux store and the root reducer
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application.
