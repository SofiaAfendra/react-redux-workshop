# Agile Actors Academy

React Workshop!

## Description

This is the final form of the Tic Tac Toe game built with React and Redux.

The basic components that make up the game are:

- `Square`: The `Square` is a single square on the board. It is responsible for rendering the value of the square and calling the function that fills the square when it is clicked.
- `Board`: The `Board` is a 3x3 grid of squares. It is responsible for rendering the squares and providing the props to the squares.
- `withBoardProps`: This is a higher order component that provides the props and functionality to the `Board`. It is responsible for providing the squares with the value of the square and the function that fills the square.
- `Game`: The `Game` is the container component that is responsible for rendering the `Board`, the player inputs and the reset button.
- `withGameProps`: This is a higher order component that provides the props and functionality to the `Game`.
- `UISetup`: This component is responsible for wrapping and providing the redux store to our application. Potentially, this component could be used to provide other functionality to the application such as routing or/and theme.

The models that make up the game are:

- `reducer`: The reducers are used to update the game state. In this case, the game reducer is responsible for updating the game state.
- `actions`: These are the actions that can be dispatched to the game slice. The actions are responsible for providing the type of action and the payload to the reducer.
- `selectors`: These are the selectors that can be used to get the game state from the redux store. The selectors are responsible for getting the game state from the redux store.

The Redux store:

- `rootReducer`: This is the root reducer that is used to combine all the reducers in the application. In this case, it only contains the game reducer.
- `store`: This is the configuration for the redux store. It is responsible for creating the store, applying the middleware and providing the state to the application. It also contains the preloaded state, meaning the initial state of the store when the application is loaded. In this case, the preloaded state is the persisted state from local storage.

Libraries used:

- `persistMiddleware`: This is a custom middleware that is used to persist the game state to local storage. It is responsible for getting the game state from the redux store and saving it to local storage in every dispatched action.

## Why use Redux instead of React Context?

React Context is a built-in feature in React designed to facilitate the sharing of data across a tree of React components, often referred to as "global" data within the context of the component tree. While it can be employed for global state management, it is generally not recommended for extensive state management purposes, as its primary use case lies elsewhere. It's important to note that React Context is not as robust as Redux and does not offer the same level of functionality. For instance, it lacks support for middleware capabilities, which allow you to inject custom logic, such as logging or API calls, between actions and reducers in a Redux-based application.

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
│   ├── models/
│   │   ├── game/
│   │   │   ├── index.js
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   ├── players/
│   │   │   ├── index.js
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   └── index.js
│   ├── store/
│   │   ├── rootReducer.js
│   │   └── store.js
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
