<h1 align="center">
  React Boilerplate
</h1>

<a align="center" href="./CHANGELOG.md">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
</a>

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

1. **Install these packages (prefer the listed versions):**

- npm 10.2.3
- node 20.10.0

2. **Create a .env file with the required variables:**

```sh
EXAMPLE_KEY=
```

3. **Install all dependencies**

```sh
npm run install
```

4. **Start the webpack-dev-server**

```sh
npm run dev
```

5. **Commands**

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

## CI configuration

- Set the environment variables in the CI environment variable section.
- The only command needed to be put on CI is 'npm run setup' which tests formatting with prettier, eslint errors, typescript errors and all tests.

## Deploy

1. First, be sure you did all steps from the configuration section.
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

[Website](https://fluffy-griffin-fa508e.netlify.app)
