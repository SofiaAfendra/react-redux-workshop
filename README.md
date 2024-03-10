# Agile Actors Academy

React Workshop

## Description

Well done for your effort so far. Now that you have grasped your basic knowledge of RTK, let's dive a little deeper.
In this section, we will learn a little bit more about this awesome library. Specifically, we will try to create a new custom hook to extract all individual game values from our store. Additionally, we will use the useSelector and useDispatch hooks, which are integrated into RTK, to access our selectors and dispatch our game's actions accordingly.


## Why use Redux Toolkit (RTK) ?

Redux Toolkit (also known as "RTK" for short) is Redux's official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that are essential for building a Redux app. Redux Toolkit builds in Redux's suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

## Why use Redux Toolkit instead of Redux?

Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to. It eliminates accidental mutations, which have always been the #1 cause of Redux bugs. It eliminates the need to write any action creators or action types by hand. It eliminates the need to write manual and error-prone immutable update logic. It makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files. RTK also offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code. Finally, RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state

## Branch goals

Since the store configuration is ready your goal for this branch is to do some minor tweeks and transform your plain Redux with redux-toolkit.
- We recommend you start with the docs: https://redux-toolkit.js.org/tutorials/quick-start
- Transform your reducers using the redux-toolkit logic and the ``createSlice()`` function.
- Your actions should be coming from the slice you created.
- Update your store file.

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
