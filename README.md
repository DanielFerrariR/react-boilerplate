<h1 align="center">
  React Boilerplate
</h1>

![Website Badge](https://img.shields.io/badge/version-1.0.0-blue)
[![Node.js CI](https://github.com/DanielFerrariR/react-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/DanielFerrariR/react-boilerplate/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/DanielFerrariR/react-boilerplate/branch/master/graph/badge.svg?token=xqzOMvxham)](https://codecov.io/gh/DanielFerrariR/react-boilerplate)

## TOC

- [Workspace](#workspace)
- [Configuration](#configuration)
- [Tests](#tests)
- [CI Configuration](#ci-configuration)
- [Deploy](#deploy)
- [Links](#links)

## Workspace

- Visual Studio Code 1.90.0

  - VSCode extensions:
    - Prettier - Code formatter 10.4.0
    - Eslint 2.4.4
    - VSCode MDX v1.8.8

## Configuration

1.  **Install these packages (prefer the listed versions):**

- npm 10.2.3
- node 20.10.0

2.  **Create a .env file with the required variables:**

```sh
EXAMPLE_KEY=
```

3.  **Install all dependencies**

```sh
npm run install
```

4.  **Start the webpack-dev-server**

```sh
npm run dev
```

5. **If Cypress (npm run test:e2e) is still not installed after npm install. Install cypress with:**

```sh
npx cypress install
```

6.  **Commands**

```bash
# Installs all dependendies
$ npm run

# Runs for web production (needs npm run build first)
$ npm run start

# Runs for web development
$ npm run dev

# Builds for web (compiled to build folder)
$ npm run build

# Runs unit tests with Jest
$ npm run test (picks automatically test:watch on local machine and test:coverage on CI)
$ npm run test:coverage (creates coverage folder)
$ npm run test:watch (with --watch flag)
$ npm run test:debug (to use chrome to debug jest tests)

# Runs E2E/Integration tests with Cypress
$ yarn test:e2e (picks automatically test:e2e:dev on local machine and test:e2e:run on CI)
$ yarn test:e2e:dev (with interface)
$ yarn test:e2e:run (without interface)

# Checks Eslint errors
$ npm run lint:eslint

# Checks Stylelint errors
$ npm run lint:stylelint

# Formats all files with prettier
$ npm run format

# Checks if all files are formatted with prettier
$ npm run check-format

# Checks typescript errors
$ npm run check-types

# CI validation command
$ npm run setup

# Run Storybook
$ npm run storybook

# Build Storybook
$ npm run build-storybook

# Analyzes the compiled files with webpack-bundle-analyzer
$ npm run analyze

# Checks for circular dependencies during development build
$ npm run check_circular

# Generate json file with circular dependencies
$ npm run check_circular:write
```

## Tests

- Unit tests are in test/jest/unit.
- e2e tests are in spec/cypress/e2e.

## CI configuration

- Set the environment variables in the CI environment variable section.
- The only command needed to be put on CI is 'npm run setup' which tests formatting with prettier, eslint errors, typescript errors and all tests.
- You need chrome installed on CI for cypress (prefer cypress/browsers 12.16.1 docker image which comes with chrome).
- In case 'npm run setup' is too heavy for your CI. You can separate each needed script like:

```bash
# Installs all dependencies
$ npm install

# Removes all folders that will be used for the merge coverage
$ rimraf .nyc_output && rimraf reports

# Installs cypress (maybe needed if your CI doesn't have cypress installed)
$ npx cypress install

# Checks typescript errors
$ npm run check-types

# Checks prettier formatting error
$ npm run check-format

# Checks Eslint errors
$ npm run lint

# Checks jest unit tests errors (The flag '--maxWorkers 1' can help with heavy memory usage on CI)
$ npm run test:coverage

# Checks cypress e2e/integration tests errors
$ npm run test:e2e:run

# Combines the coverage folder of cypress and jest into a single coverage folder
$ npm run report:combined
```

## Deploy

1. First, be sure you did everything from the configuration section (steps 1 to 4 are the most important ones).
2. 'npm run build' command will compile all files and put them into build folder.
3. Install Apache. (I'm using XAMPP for this example. Link: [Apache](https://www.apachefriends.org/download.html))
4. Clean up htdocs folder of xampp/htdocs.
5. Put all files from dist folder into xampp/htdocs folder.
6. Open XAMPP and, on the line of module apache, click on the 'Start' button.
7. Access 'localhost' from your browser and see that the page loads correctly. It will still not work if you try to access a route manually (like 'localhost/login'). See below how to fix it.

- For react router works correctly, you need to create a file '.htaccess' in the root of htdocs directory. Put this info there:

```bash
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Links

[![Website Badge](https://img.shields.io/badge/Website-blue)](https://fluffy-griffin-fa508e.netlify.app)
[![Storybook Badge](https://img.shields.io/badge/Storybook-ff4785)](https://mellifluous-bombolone-aea06d.netlify.app)
