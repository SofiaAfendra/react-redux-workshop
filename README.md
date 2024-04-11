# Agile Actors Academy

React Workshop

## Branch Description

Well done for your effort so far! Now that you have grasped your basic knowledge of RTK, let's dive a little deeper.

In this section, we will learn a little bit more about this awesome library. Specifically, we will create a new custom hook using the `useSelector` and `useDispatch` hooks, which are integrated in react-redux, to access our selectors and dispatch our game's actions accordingly.

## Why do we need to do that?

Overall, using a custom hook that returns all selectors and actions in a React app can lead to cleaner, more maintainable code, improved encapsulation, better testability, and potentially enhanced performance.

- By centralizing all selectors and actions within a single custom hook, you establish a single source of truth for managing state-related operations. This can help prevent inconsistencies and reduce the likelihood of bugs caused by scattered state management logic across different parts of your application.

- Abstracting away the state management logic into a custom hook helps to hide implementation details and provides a cleaner interface for consuming components. This makes it easier for other developers (or even your future self) to understand and work with the codebase.

- A custom hook to encapsulate selectors and actions is a way to follow the DRY (Don't Repeat Yourself) principle in software development. The DRY principle advocates for reducing repetition of code by abstracting common functionality into reusable components or functions.

## Let's have a sneak peek to the previous

`uselector`: hook is a special hook provided by react-redux library. It allows you to extract data from the Redux store state for use in this component, using a selector function.

`useDispatch`: hook is another special hook by react-redux library. This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

You can do your reasearch and refresh your memory at : https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app.

## Branch Tasks

Let's break down your goals for this section:

1. Since we have all our selector's and actions extracted. We only need to create a custom hook for our game. Since this is a utility function add it in the utils folder (_./src/utils_). A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
2. Use the custom hook to extract the selector's and dispatched actions wherever it is needed throughout the app.

> **Hint:** pay close attention to the objects we use to map selectors and actions in the `withGameProps.jsx` / `withBoardProps.jsx` file. Do we still need them?

> **Hint:** If the mapping process is no longer available does the `withGameProps.jsx`/ `withBoardProps.jsx` file have any props passed to it?

> **Hint** Are there any other places we need to look to remove or reform the same pattern?

**Covers:**

- [useSelector](https://react-redux.js.org/api/hooks#useselector)
- [useDispatch](https://react-redux.js.org/api/hooks#usedispatch)

Good luck!!

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
│   │   ├── square/
│   │   │     ├── Square.jsx
│   │   │     └── ...
│   │   └── ui-setup/
│   │       ├── UISetup.jsx
│   │       └── ...
│   ├── libraries/
│   │   └─ persist-middleware/
│   │       ├── persistState.js
│   │       └── ...
│   ├── models/
│   │   └── game/
│   │       ├── actions.js
│   │       ├── reducer.js
│   │       ├── selectors.js
│   │       └── ...
│   ├── store/
│   │   ├── rootReducer.js
│   │   └── store.js
│   ├── utils/
│   │   ├── calculateWinner.js
│   │   ├── useGameStore.js
│   │   └── ...
│   ├── config.js
│   └── main.jsx
├── package.json
├── README.md
└── ...
```

- _src/_ contains the source code for the project
- _src/components/_ contains the React components used to build the game and the HOCs used to provide props to presentational components
- _src/libraries/persist-middleware/_ contains the custom middleware implementation
- _src/models/game/_ contains the redux reducer, actions and selectors for the game
- _src/store/_ contains the configuration for the redux store and the root reducer
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application
