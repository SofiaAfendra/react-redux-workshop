# Agile Actors Academy

React Workshop

## Description

Well done for your effort so far. Now that you have grasped your basic knowledge of RTK, let's dive a little deeper.
In this section, we will learn a little bit more about this awesome library. Specifically, we will try to create a new custom hook to extract all individual game values from our store. Additionally, we will use the useSelector and useDispatch hooks, which are integrated into RTK, to access our selectors and dispatch our game's actions accordingly.

## Let's have a sneek peek to the past

``uselector`` hook is a special hook provided by react-redux library. It allows you to extract data from the Redux store state for use in this component, using a selector function.
``useDispatch`` hook is another special hook by react-redux library. This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
You can do your reasearch and refresh your memory in : https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app

## Goals

Let's break down your goals for this section: 

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
