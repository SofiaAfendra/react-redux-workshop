# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, you will be introduced to the concept of custom hooks. Your goal is to move all persisted state logic from the withGameProps HOC, into a new separate file.

## Why is this useful?

Custom hooks are a powerful feature in React that allows you to extract component logic into reusable functions. This can be useful for sharing logic between components, and for creating more readable and maintainable code.

**Branch Task:**

1. Create a folder named **libraries** in src, a file named **usePersistState.js** inside and an **index.js** file that exports it.
2. Separate any persisted state logic from the **withGameProps.jsx** into **usePersistedState.js**.
   > Hint: Upon calling the usePersistedState hook within withGameProps, it should return persistedState and setPersistededState.

**Covers:**

- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
