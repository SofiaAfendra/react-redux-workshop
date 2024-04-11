# Agile Actors Academy

React Workshop!

## Branch Description

This is the final form of the Tic Tac Toe game built with React and Redux-Toolkit.

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
│   ├── libraries/
│   │   ├─ persistMiddleware/
│   │   │   ├── persistState.js
│   │   │   └── ...
│   │   └── with-model-props/
│   │       ├── withModelProps.jsx
│   │       └── ...
│   ├── models/
│   │   └── game/
│   │       ├── actions.js
│   │       ├── selectors.js
│   │       ├── slice.js
│   │       └── ...
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

- _src/_ contains the source code for the project
- _src/components/_ contains the React components used to build the game and the HOCs used to provide props to presentational components
- _src/libraries/persist-middleware/_ contains the custom middleware implementation
- _src/libraries/with-model-props/_ contains the HOC used to provide props to presentational components
- _src/models/game/_ contains the redux slice, actions and selectors for the game
- _src/store/_ contains the configuration for the redux store and the root reducer
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application.
