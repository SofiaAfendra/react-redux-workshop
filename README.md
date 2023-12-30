# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, you will be introduced to the useEffect hook and the localStorage browser API. You will use the useEffect hook to load/update state from the localStorage and calculate the winner of the game.

**Branch Task:**

1. ...

_hint_: The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

The localStorage API has 2 common functions to set/get a value from local storage

```javascript
// in local storage the keys/values are always strings so
// we use JSON.stringify to save the state into the localStorage
// and JSON.parse to get it

const retrievedState = JSON.parse(window.localStorage.getItem('ticTacToe'));
```

**Covers:**

- [UseEffect](https://react.dev/reference/react/useEffect)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
