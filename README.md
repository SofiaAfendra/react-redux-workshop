# Agile Actors Academy

React Workshop

## Description

Beautiful effort so far! Now it is time to combine all our previous knowledge and give our `Game` a nice finishing touch for RTK.

Using a custom Hook has nothing wrong. It remains our single source of truth, it allows us to skip the part where we need to use the react-redux hooks all over the app which is great! But in more complex applications, it can be a bit tricky to manage all the store related logic in a custom Hook like `useGameStore`.

Here is an alternative to this approach. The Agile Actors framework strongly supports the separation of concerns throughout our components. To manage that let's consider rewinding back before having our custom hook.

Let's consider creating a HOC that takes all the mapping concerns of our selectors and actions and passing them to their contextually children components as props enhancing our game with just the use of an individual HOC.

## Why do we need to do that?

This is relevant to the Agile Actors framework. As an organization, it's critical to maintain certain constants to enhance communication and ensure clarity in our approach.

With that in mind, it's crucial to emphasize the separation of concerns. We must adhere to and implement a specific design pattern. This means that components handling the UI (View) are solely responsible for that, while another layer should exclusively handle the business logic managing the state (Model).

## Branch Tasks

Since this is a really tricky endeavour, we'll need to get to a really deep break down to get the hold of it.

What we basically need to do is create a HOC component that manages all the logic of managing the Selectors and Actions and pass them down to it's children components as props. Since this is clear we can get our hands dirty with the implementation.

1. Let's start by creating a component in our _libraries_ folder(_./src/libraries_) with the name `withModelProps.jsx`. This is the wrapper we will use to manage our state from now on.

   - This component will actually accept a series of values as props that will be the actions and selectors we need to pass down and will return our already wrapped component enhanced with the props we are passing to it.

   > **Hint:** Let's first think about the values we are passing through as props to our enhanced component. What are they? How can we separate the Selectors from the actions?

   > **Hint:** log the actions and selector in an object to find out a property that might help you separate them. e.g. `console.log({setplayer1, player1})`. You can use that in your custom hook for now.

   - Create the necessary helper functions that will help you separate them in selectors and actions for your enhanced component.

2. After you have separated the props, you can now pass them down to the wrapped component. You can do this by using the `useSelector` hook to get the state from the store and the `useDispatch` hook to dispatch the actions.

   - You should keep in mind that when the function component renders, the provided selector function will be called and its result will be returned from the `useSelector()` hook. (A cached result may be returned by the hook without re-running the selector if it's the same function reference as on a previous render of the component.)

   - However, when an action is dispatched to the Redux store, `useSelector()` only forces a re-render if the selector result appears to be different than the last result. The default comparison is a strict `===` reference comparison. This is different than `connect()`, which uses shallow equality checks on the results of mapState calls to determine if re-rendering is needed. This has several implications on how you should use `useSelector()`.

   - With mapState, all individual fields were returned in a combined object. It didn't matter if the return object was a new reference or not - `connect()` just compared the individual fields. With `useSelector()`, returning a new object every time will always force a re-render by default.

   > **Hint:** If you want to retrieve multiple values from the store, you can use the `shallowEqual` function from React-Redux as the equalityFn argument to `useSelector()`.

   > **Hint:** There is a function in react-redux library called `bindActionCreators`.Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.

   > **Hint:** To avoid the re-rendering of the component you can use the `useMemo` hook to memoize the bound action props.

   > **Hint:** `connect` from react-redux uses `React.memo` under the hood to prevent unnecessary re-renders. You can use it too to accomplish the same result.

3. After you have separated the props and manage to call them either with the `useSelector` hook or bind them with the dispatch function, you are almost at the finish line. The only remaining thing to do is to compose your wrapper components with the `withModelProps` (don't forget to pass your props here) component with the contextually children components.

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
│   │   |   ├── actions.js
│   │   |   ├── reducer.js
│   │   |   ├── selectors.js
│   │   |   └── ...
|   |   └── player/
│   │       ├── actions.js
│   │       ├── reducer.js
│   │       ├── selectors.js
│   │       └── ...
│   ├── store/
│   │   ├── rootReducer.js
│   │   └── store.js
│   ├── utils/
│   │   ├── calculateWinner.js
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
- _src/main.jsx_ is the entry point for the application.
