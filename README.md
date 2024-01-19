# graphiql-app

This project is the final assignment for Rolling Scopes School's React course.

Task: [GraphiQL](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md)

Deploy: [Playground GraphiQL](https://659a80185fbe6977b078c141--rs-graphiql-playground.netlify.app/)

## Description

The GraphiQL application is a GraphQL playground/IDE. It includes authorization using Firebase for email/password sign-in, client-side validation, and redirects upon successful login. The app doesn't require a backend, supporting any open GraphQL API with CORS.

The structure consists of a welcome page, a sticky header with animated changes, and a persistent footer. The main page (GraphiQL) is a private route with sections for query editing, variables, headers, documentation, and a read-only response area. Users can switch GraphQL endpoints with the "Change Endpoint" button.

Project include at least 90% test coverage, ESLint, Prettier, and Husky hooks.

Design-wise, the app prioritizes attention to detail, adaptive layout, interactivity, and a unified style. App handles API errors in a user-friendly format and implements localization in at two languages (Russian and English).

## Dream team

[Svetlana Ivanova](https://github.com/climbingirl)

[Kirill Mezentsev](https://github.com/kirillvm)

[Elizaveta Novikova](https://github.com/kotangenss)

## Team mentor

[Alexey Abramov](https://github.com/al-abramov)

## Tech stack

This app is built using the following technologies:

- [React](https://react.dev/): A popular JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/en/main): Declarative routing for React.js.
- [React Redux](https://react-redux.js.org/): Official React bindings for Redux, a predictable state container for JavaScript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/): Set of tools that helps simplify Redux development. Includes utilities for creating and managing stores.
- [TypeScript](https://www.typescriptlang.org/docs/): A typed superset of JavaScript that enhances reliability and scalability.
- [React Hook Form](https://react-hook-form.com/): Library for form state management and validation.
- [Axios](https://axios-http.com/ru/docs/intro): A promise-based HTTP client for the browser and Node.js, used for making API requests.
- [Yup](https://github.com/jquense/yup): A JavaScript schema builder for value parsing and validation.
- [Jest](https://jestjs.io/): A JavaScript testing framework.
- [Vite](https://vitejs.dev/): A fast frontend build tool.

## Installation

1. Install [Node.js](https://nodejs.org/ru) version 16 or higher.
2. Clone this [repository](https://github.com/KirillVM/graphiql-app) to your computer.
3. Go to folder `graphiql-app`.
4. Install all dependencies using `npm install`.
5. Run `npm run dev` in command line and enjoy 😉

## Available scripts

In the project directory, you can run:

```
npm run dev
```

Runs the app in the development mode.
The page will reload if you make edits.\
You will also see any lint errors in the console.

```
npm run build
```

Builds the app for production.\
It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm run test
```

This script uses Jest as a testing framework to run tests on a project and generates a code coverage report, providing information about how much of the code is covered by tests.

See the section [Jest docs](https://jestjs.io/docs/getting-started/) for more information.

```
npm run lint:fix
```

This script uses ESLint to check the project's source code against certain rules and coding styles for TypeScript and TypeScript React files and attempts to automatically fix linting errors.

It also includes additional options such as reporting unused directives and setting the maximum number of warnings allowed.

See the section [ESLint docs](https://eslint.org/docs/latest/) for more information.

```
npm run format:fix
```

This script uses Prettier to automatically format the project's source code and applies changes to the files, ensuring consistency in the code style, indentation, and other formatting rules defined in the Prettier configuration.

See the section [Prettier docs](https://prettier.io/docs/en/) for more information.

```
npm run preview
```

This script starts Vite in preview mode, providing a quick way to preview the production build locally. It allows you to see how the application will behave in a production-like environment before deployment.

See the section [Vite docs](https://vitejs.dev/) for more information.

```
npm run prepare
```

This script creates and configures Husky, a popular tool for working with Git hooks in a future project. Husky provides the ability to automatically fire an action before commits or other Git operations.

Running the "npm run prepare" command at the root of the project installs Husky and sets up the necessary Git hooks so that they are automatically executed on certain Git events.

See the section [Husky docs](https://typicode.github.io/husky/) for more information.

##
