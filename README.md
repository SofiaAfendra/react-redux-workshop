# Agile Actors Academy

## React Workshop: Tic Tac Toe Game

This is a simple Tic Tac Toe game built with React. It allows two players to play against each other on a 3x3 grid. The game keeps track of the current player, the squares that have been filled, and the winner of the game.

Description
The app is built using JavaScript and React.
It uses a custom hook called `useGameState` to manage the game state, and a higher-order component called `withGameProps` to provide game props to other components.

The `calculateWinner` utility function is used to determine the winner of the game, and the `handlePlayerMove` function is used to handle player moves on the game board.

File Structure
The project has the following file structure:

```bash
tic-tac-toe/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Square.jsx
│   │   └── ...
│   ├── models/
│   │   ├── gameState.js
│   │   └── ...
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   └── ...
│   ├── withGameProps.jsx
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

- public/ contains the public assets for the application, such as the HTML file.
- src/ contains the source code for the project.
- src/components/ contains the React components used to build the game.
- src/models/ contains the context and reducer used to manage the game state.
- src/utils/ contains utility functions used in the game.
- src/withGameProps.jsx is a higher-order component that provides game props to other components.
- src/index.js is the entry point for the application.

Usage
To start the game, run the following command in your terminal:

```bash
pnpm dev
```

This will start the development server and open the game in your default browser. You can now play the game by clicking on the squares to fill them with X or O.
