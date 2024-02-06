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

The models that make up the game are:

- StateProvider: This is a context provider that creates a global game state and shares it across the application.
- reducer: This is the reducer that manages the game state.
- useGameState: This is a custom hook that provides the game state and the functions that update the game state to the components that need it.

Libraries used:

- usePersistState: This is a custom hook that persists the game state to local storage.

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
│   │   └── square/
│   │       ├── Square.jsx
│   │       └── ...
│   ├── config/
│   │       ├── config.js
│   │       └── ...
│   ├── libraries/
│   │   └─ usePersistState/
│   │       ├── usePersistState.js
│   │       └── ...
│   │
│   ├── models/
│   │   └── state/
│   │       ├── StateProvider.js
│   │       ├── reducer.js
│   │       ├── useGameState.js
│   │       └── ...
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
- src/libraries/persistState/ contains the custom hook used to persist the game state to local storage
- src/models/state/ contains the context and reducer used to manage the game state
- src/utils/ contains utility functions used in the game
- src/main.jsx is the entry point for the application.
