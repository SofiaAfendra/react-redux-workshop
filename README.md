# Agile Actors Academy

React Workshop!

## Branch Description

In this branch, we will use the `Game` component. We should change the folder structure in order to enhance code organization, readability, and maintainability.

The file structure should be like this:

```
├── components
│   ├── board
│   │   ├── Board.jsx
│   │   ├── index.js
│   │   └── styles.module.css
│   ├── game
│   │   ├── Game.jsx
│   │   ├── index.js
│   │   └── styles.module.css
│   └── square
│       ├── Square.jsx
│       ├── index.js
│       └── styles.module.css
```

In each component folder, you'll find an _index.js_ file. This file serves a specific purpose in enhancing the organization and modularity of the project.

- The primary role of the _index.js_ file is to export the associated React component. Instead of importing the component directly from its file path, importing it from the _index.js_ file provides a cleaner and more concise syntax.
- The _index.js_ file acts as an entry point for the component, providing a central location for all exports related to that component. This simplifies the import process, making it more straightforward for developers to include the component in other parts of the application.
- When multiple components are imported into a file, having a clear entry point for each component enhances code readability. It also makes it easier to manage and update imports if the file structure or component locations change over time.
- In some cases, the _index.js_ file may also be used to export additional functionality related to the component, such as utility functions, constants, or Higher-Order Components.

**Branch Task:**

1. Change the folder structure.
2. The `Game` component should render the `Board` component.
3. The classes needed for the _styles.modules.css_ files are inside the _index.module.css_. Once you copy and paste all the classes, remove the _index.module.css_ file.

**Covers:**

- [The importance of having good folder structure in your code](https://dev.to/thatsoftwaredude/the-importance-of-having-good-folder-structure-in-your-code-34mf)
- [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
