# Agile Actors Academy

React Workshop

## Description

Beautiful effort so far. Now it is time to combine all out previous knowlegde and give our Game a nice finishing touch for RTK.
Using a custom Hook has nothing wrong. It remains our single source of truth, it allows us to skip the part where we need to use the react-redux hooks all over the app which is great! But here is an alternative to this approach. The agile framework strongly supports the separation of concerns throughout our components. To manage that let's consider rewinding back before having our custom hook. Let's consider creating a HOC that takes all the mapping concerns of our selectors and actions and passing them to their contextually children components as props enhancing our game with just the use of an individual HOC.


## Why do we need to do that?

All this is about has to do with the agile framework. As an organization we need to keep some constants that will help to have better communication a clear way of how everything is being built. That said we have to establish that the separation of concerns is of absolute importance. We need to follow and use a certain design pattern, this means that the components responsible for the UI part (View) is only responsible for that, another type of components should be responsible only for our business logic that manage the state (Model).

## Goals

Since this is a really tricky endeavour we'll need to get to a really deep break down to get the hold of it. 

What we basically need to do is create a HOC component that manages all the logic of managing the Selectors and Actions and pass them down to it's children components as props. Since this is clear we can get our hands dirty with the implementation.

Let's start by creating a component in our libraries folder(./src/libraries) with the name `withModelProps.jsx`. This is the wrapper we will use to manage our state from now on.

This component will actually accept a series of values as props that will be the actions and selectors we need to pass down and will return our already wrapped component enhanced with the props we are passing to it.

> **Hint:** Let's first think about the values we are passing through as props to our enhanced component. What are they? How can we separate the Selectors from the actions?

> **Hint:** log the actions and selector in an object to find out a property that might help you separate them. e.g. console.log({setplayer1, player1}). you can use that in your custom hook for now.

> **Hint:** create some function that will help you separate them in selector properties and action properties for your enhanced component. Create at least two function as helpers for this assignment.

You should also keep in mind that when the function component renders, the provided selector function will be called and its result will be returned from the useSelector() hook. (A cached result may be returned by the hook without re-running the selector if it's the same function reference as on a previous render of the component.)

However, when an action is dispatched to the Redux store, useSelector() only forces a re-render if the selector result appears to be different than the last result. The default comparison is a strict === reference comparison. This is different than connect(), which uses shallow equality checks on the results of mapState calls to determine if re-rendering is needed. This has several implications on how you should use useSelector().

With mapState, all individual fields were returned in a combined object. It didn't matter if the return object was a new reference or not - connect() just compared the individual fields. With useSelector(), returning a new object every time will always force a re-render by default. If you want to retrieve multiple values from the store, you can: Use the shallowEqual function from React-Redux as the equalityFn argument to useSelector().

> **Hint:** There is a function in react-redux library called `bindActionCreators`.Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly. 

After you have separated the props and manage to call them either with the useSelector hook or bind them with the dispatch function, you are almost at the finish line.

> **Hint:** To avoid the re-rendering of the component you can use the `useMemo` hook to memoize the enhanced component.
 
The only remaining thing to do is to compose your wrapper components with the `withModelProps` (don't forget to pass your props here) component with the contextually children components. 


 ### Good luck!!

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
