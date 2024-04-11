# Agile Actors Academy

React Workshop!

## Branch description

In this branch we will make all business logic, that now resides in the `Game` component, reusable by creating a `withGameProps` Higher Order Component (HOC). Accordingly, we will follow these steps for the `Board` component.

## Why use HOC and presentational components?

The HOC and presentational component pattern is used to separate the logic from the presentation. This allows the components to be reused in other applications and makes the code easier to read, maintain and debug.

## Benefits of using HOCs

1. Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.

2. Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.

3. Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.

4. Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.

5. Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, and many other features.

## Branch Tasks

1. Create a Higher Order Component (HOC) `withGameProps`.
2. Move the `Game` component `useEffect`, `useState`, `useRef` hooks and the rest functionality to the HOC.
3. Create a HOC `withBoardProps`.
4. Move the `Board` component functionality to the HOC.

**Covers:**

- Code reusability with **Higher Order Components** (HOC)

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
│   │   └── square/
│   │       ├── Square.jsx
│   │       └── ...
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
- _src/utils/_ contains utility functions used in the game
- _src/config.js_ contains the configuration for the game such as the persistence key
- _src/main.jsx_ is the entry point for the application.
