# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will introduce the `useEffect` hook and the `localStorage` browser API. We will use the `useEffect` hook to load/update state from the `localStorage` and calculate the winner of the game.

## What is the useEffect hook?

The `useEffect` hook is a function that allows us to perform side effects in our function components. Side effects are operations that are not directly related to the rendering of your component. This includes things like data fetching, setting up subscriptions, and manually changing the DOM.

The `useEffect` hook takes two arguments: a function and an array of dependencies. The function is the side effect we want to perform, and the array of dependencies is a list of variables that the effect depends on. If any of the variables in the array change, the effect will run again.

**Branch Task:**

1. Use `Game` component's `useEffect` hook to load/update state from/to `localstorage`.
2. If a winner exists, display their name in `status` and clear the `localstorage`.

> Hint: The read-only `localStorage` property allows us to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

The `localStorage` API has 2 common functions to set/get a value from local storage

```javascript
// in local storage the keys/values are always strings so
// we use JSON.stringify to save the state into the localStorage
// and JSON.parse to get it

window.localStorage.setItem('ticTacToe', JSON.stringify(this.state));

const retrievedState = window.localStorage.getItem('ticTacToe');

this.setState(JSON.parse(retrievedState));
```

**Covers:**

- [UseEffect](https://react.dev/reference/react/useEffect)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
