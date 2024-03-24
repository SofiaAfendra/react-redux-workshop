# Agile Actors Academy

React Workshop

## Description

Well done for your effort so far. Now that you have grasped your basic knowledge of RTK, let's dive a little deeper.
In this section, we will learn a little bit more about this awesome library. Specifically, we will create a new custom hook using the useSelector and useDispatch hooks, which are integrated in react-redux, to access our selectors and dispatch our game's actions accordingly.
As you can see the actions that are now extracted from the actions file won't dispatch.

## Why do we need to do that?
Overall, using a custom hook that returns all selectors and actions in a React app can lead to cleaner, more maintainable code, improved encapsulation, better testability, and potentially enhanced performance.

- By centralizing all selectors and actions within a single custom hook, you establish a single source of truth for managing state-related operations. This can help prevent inconsistencies and reduce the likelihood of bugs caused by scattered state management logic across different parts of your application.

- Abstracting away the state management logic into a custom hook helps to hide implementation details and provides a cleaner interface for consuming components. This makes it easier for other developers (or even your future self) to understand and work with the codebase.

- A custom hook to encapsulate selectors and actions is a way to follow the DRY (Don't Repeat Yourself) principle in software development. The DRY principle advocates for reducing repetition of code by abstracting common functionality into reusable components or functions.

## Let's have a sneek peek to the past

``uselector``: hook is a special hook provided by react-redux library. It allows you to extract data from the Redux store state for use in this component, using a selector function.

``useDispatch``: hook is another special hook by react-redux library. This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

You can do your reasearch and refresh your memory at : https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app.

## Goals

Let's break down your goals for this section: 

- Since we have all our selector's and actions extracted. We only need to create a custom hook for our game.Since this is a utility function add it in the utils folder (./src/utils). A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

- Use the custom hook to extract the selector's and dispatched actions wherever it is needed throughout the app.

> **Hint:** pay close attendion to the objects we use to map selectors and actions in the `withGameProps.jsx` file. Do we stil need them?

> **Hint:** If the mapping proccess is no longer available does the `withGameProps.jsx` file have any props passed to it?

> **Hint** Are there any other places we need to look to remove or reform the same pattern?


Good luck!!

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
