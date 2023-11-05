# Agile Actors Academy

React Workshop

## Description

This is the final form of the Tic Tac Toe game built with React. It allows two players to play against each other on a 3x3 grid. The game keeps track of the current player, the squares that have been filled, and the winner of the game. The game state is persisted to local storage so that the game can be resumed after the page is refreshed and can be reset by clicking the "Reset Game" button.

The basic components that make up the game are:

- Square: The Square is a single square on the board. It is responsible for rendering the value of the square and calling the function that fills the square when it is clicked.
- Board: The Board is a 3x3 grid of squares. It is responsible for rendering the squares and providing the props to the squares.
- withBoardProps: This is a higher order component that provides the props and functionality to the Board. It is responsible for providing the squares with the value of the square and the function that fills the square.
- Game: The game is the container component that is responsible for rendering the Board, the player inputs and the reset button.
- withGameProps: This is a higher order component that provides the props and functionality to the Game.
- UISetup: This component is responsible for wrapping and providing the redux store to our application. Potentially, this component could be used to provide other functionality to the application such as routing or/and theme.

The models that make up the game are:

- slice: This is the slice of the redux store that contains the game state. The slice is responsible for managing the game state, such as keeping track of the current players, the squares that have been filled, the next move and the winner of the game. The slice also provides the reducer. The reducer is responsible for updating the game state based on the action that is dispatched.
- actions: These are the actions that can be dispatched to the game slice. The actions are responsible for providing the type of action and the payload to the reducer.
- selectors: These are the selectors that can be used to get the game state from the redux store. The selectors are responsible for getting the game state from the redux store.

The Redux store:

- rootReducer: This is the root reducer that is used to combine all the reducers in the application. In this case, it only contains the game reducer.
- store: This is the configuration for the redux store. It is responsible for creating the store, applying the middleware and providing the state to the application. It also contains the preloaded state, meaning the initial state of the store when the application is loaded. In this case, the preloaded state is the persisted state from local storage.

Libraries used:

- persistMiddleware: This is a custom middleware that is used to persist the game state to local storage. It is responsible for getting the game state from the redux store and saving it to local storage in every dispatched action.
- withModelProps: This is a higher order component that is used to provide actions and selectors as props to the wrapped component. In other words, It is responsible for providing the game state to the Game and Board components.

## Why use Redux-Toolkit?

Redux-Toolkit is a library that provides a set of tools to make working with Redux easier. It provides a set of utilities that simplify common Redux use cases, such as store setup, defining reducers, immutable update logic, and even creating entire "slices" of state at once without writing any action creators or action types by hand. It is also the recommended way to write Redux code.

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
│   │   ├─ persistMiddleware/
│   │   │   ├── persistState.js
│   │   │   └── ...
│   │   └── with-model-props/
│   │       ├── withModelProps.jsx
│   │       └── ...
│   │
│   ├── models/
│   │   └── game/
│   │       ├── actions.js
│   │       ├── selectors.js
│   │       ├── slice.js
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
- src/libraries/with-model-props/ contains the HOC used to provide props to presentational components
- src/models/game/ contains the redux slice, actions and selectors for the game
- src/store/ contains the configuration for the redux store and the root reducer
- src/utils/ contains utility functions used in the game
- src/main.jsx is the entry point for the application.
