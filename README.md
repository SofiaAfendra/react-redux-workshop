# Agile Actors Academy

React Workshop

## Description

Nicely done! Now it's time to kick it up a notch. In this branch you will finally replace the previous reactStore with the new Redux store you have been setting up.

**Branch Tasks:**

1. Selectors in models/game functions that take the state and return a specific value from the store.

2. mapStateToProps in components/Game.jsx a function that takes the state and returns an object holding each game related value using the selectors.

3. mapDispatchToProps components/Game.jsx an object holding all actions.

4. connect mapStateToProps, mapDispatchToProps and withGameProps. It provides withGameProps with pieces of data passed and the functions to dispatch actions to the store. Return a HOC that wraps the component that was passed and merges it's props with mapStateToProps and mapDispatchToProps.

5. Replace useGameState and refactor previous logic/functionality.

**Covers:**

- [Selectors](https://redux.js.org/usage/deriving-data-selectors)
- [Connect](https://react-redux.js.org/api/connect)
<!-- Compose page from docs is pretty meh maybe find another resource, or just add explanation here in README -->
- [Compose](https://redux.js.org/api/compose)
