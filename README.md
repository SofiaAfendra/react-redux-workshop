# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, you will be introduced to the useEffect hook and the localStorage browser API. You will use the useEffect hook to load/update state from the localStorage and calculate the winner of the game.

**Branch Task:**

1. Use Game component's useEffect hook to load/update state from/to localstorage.
2. If a winner exists, display their name in 'status' and clear the localstorage.

> Hint: The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

The localStorage API has 2 common functions to set/get a value from local storage

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
