# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will introduce the concept of custom hooks. Our goal is to move all persisted state logic from the `withGameProps` HOC, into a new separate file.

## Why is this useful?

Custom hooks are a powerful feature in React that allows to extract component logic into reusable functions. This can be useful for sharing logic between components, and for creating more readable and maintainable code.

They can consume other hooks, take arguments, and return values just like any other function, but with the added benefit of having access to React's state and lifecycle features.

## Branch Tasks

1. Create a folder named _libraries_ in src, a file named _usePersistState.js_ inside and an _index.js_ file that exports it.
2. Separate any persisted state logic from the _withGameProps.jsx_ into _usePersistedState.js_.

   > Hint: Upon calling the `usePersistedState` hook within `withGameProps`, it should return `persistedState` and `setPersistededState`.

**Covers:**

- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

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
│   │
│   ├── libraries/
│   │    ├── usePersistState.js
│   │    └── ...
│   │
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   └── ...
│   ├── config.js
│   ├── main.jsx
├── package.json
├── README.md
└── ...
```

- _src/_ contains the source code for the project
- _src/components/_ contains the React components used to build the game and the HOCs used to provide props to presentational components
- _src/libraries/_ contains the custom hook used to persist the game state to local storage
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application.
