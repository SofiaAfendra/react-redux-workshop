# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will introduce the concept of lifting state up. Our goal is to move the state for the **Square** component inside the new **Board** component.

## Why is this useful?

Lifting state up is a common technique in React. It allows you to share state between components and make sure that the source of truth is always in the same place. This makes it easier to manage state and keep your application consistent.

**Branch Task:**

1. Find a way to lift the state so that the **Board** has all the state for each **Sqaure** component.
2. Utilize the renderSquare to return a **Square** component with a value and an onClick as props.
3. Utilize renderRow to return three **Square** components inside the **Board** component.
4. Make sure that if a square has a value it no longer changes when clicked.

**Covers:**

- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Lifting State](https://react.dev/learn/sharing-state-between-components)
