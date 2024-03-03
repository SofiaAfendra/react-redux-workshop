# Agile Actors Academy

React Workshop

## Description

This is the final form of the Tic Tac Toe game built with React and Redux.

The basic components that make up the game are:

- Square: The Square is a single square on the board. It is responsible for rendering the value of the square and calling the function that fills the square when it is clicked.
- Board: The Board is a 3x3 grid of squares. It is responsible for rendering the squares and providing the props to the squares.
- withBoardProps: This is a higher order component that provides the props and functionality to the Board. It is responsible for providing the squares with the value of the square and the function that fills the square.
- Game: The game is the container component that is responsible for rendering the Board, the player inputs and the reset button.
- withGameProps: This is a higher order component that provides the props and functionality to the Game.
- UISetup: This component is responsible for wrapping and providing the redux store to our application. Potentially, this component could be used to provide other functionality to the application such as routing or/and theme.

The models that make up the game are:

- reducer: The reducers are used to update the game state. In this case, the game reducer is responsible for updating the game state.
- actions: These are the actions that can be dispatched to the game slice. The actions are responsible for providing the type of action and the payload to the reducer.
- selectors: These are the selectors that can be used to get the game state from the redux store. The selectors are responsible for getting the game state from the redux store.

The Redux store:

- rootReducer: This is the root reducer that is used to combine all the reducers in the application. In this case, it only contains the game reducer.
- store: This is the configuration for the redux store. It is responsible for creating the store, applying the middleware and providing the state to the application. It also contains the preloaded state, meaning the initial state of the store when the application is loaded. In this case, the preloaded state is the persisted state from local storage.

Libraries used:

- persistMiddleware: This is a custom middleware that is used to persist the game state to local storage. It is responsible for getting the game state from the redux store and saving it to local storage in every dispatched action.
- redux/toolkit: It is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

    1. Configuring a Redux store is too complicated
    1. I have to add a lot of packages to get Redux to do anything useful
    1. Redux requires too much boilerplate code
    

## Why use Redux Toolkit (RTK) ?

Redux Toolkit (also known as "RTK" for short) is our official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

## Why use Redux Toolkit instead of Redux?

Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to. It eliminates accidental mutations, which have always been the #1 cause of Redux bugs. It eliminates the need to write any action creators or action types by hand. It eliminates the need to write manual and error-prone immutable update logic. It makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files. RTK also offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code. Finally, RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state

## File Structure

The project has the following file structure:

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
│   ├── config/
│   │       ├── config.js
│   │       └── ...
│   ├── libraries/
│   │   └─ persist-middleware/
│   │       ├── persistState.js
│   │       └── ...
│   │
│   ├── models/
│   │   └── game/
│   │       ├── actions.js
│   │       ├── reducer.js
│   │       ├── selectors.js
│   │       └── ...
│   ├── store/
│   │   ├── rootReducer.js
│   │   └── store.js
│   │
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   └── ...
│   ├── main.jsx
├── package.json
├── README.md
└── ...
```

- src/ contains the source code for the project
- src/components/ contains the React components used to build the game and the HOCs used to provide props to presentational components
- src/config/ contains the configuration for the game such as the persistence key
- src/libraries/persist-middleware/ contains the custom middleware implementation
- src/models/game/ contains the redux reducer, actions and selectors for the game
- src/store/ contains the configuration for the redux store and the root reducer
- src/utils/ contains utility functions used in the game
- src/main.jsx is the entry point for the application.
