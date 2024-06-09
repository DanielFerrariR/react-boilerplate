<h1 align="center">
  React Boilerplate
</h1>

<a align="center" href="./CHANGELOG.md">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
</a>

<a align="center" href="https://travis-ci.com/github/DanielFerrariR/react-boilerplate">
  <img src="https://api.travis-ci.com/DanielFerrariR/react-boilerplate.svg?branch=master" />
</a>

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

- yarn 1.22.21
- npm 10.2.3
- node 20.10.0

2. **Create a .env file with the required variables:**

```sh
EXAMPLE_KEY=
```

3. **Install all dependencies with yarn (not npm!!)**

```sh
yarn
```

4. **Start the webpack-dev-server**

```sh
yarn dev
```

5. **Commands**

```bash
# Installs all dependendies
$ yarn

# Runs for web production (needs yarn build first)
$ yarn start

# Runs for web development
$ yarn dev

# Builds for web (compiled to build folder)
$ yarn build

# Runs unit tests with Jest
$ yarn test (picks automatically test:watch on local machine and test:coverage on CI)
$ yarn test:coverage (creates coverage folder)
$ yarn test:watch (with --watch flag)
$ yarn test:debug (to use chrome to debug jest tests)

# Checks Eslint errors
$ yarn lint:eslint

# Checks Stylelint errors
$ yarn lint:stylelint

# Formats all files with prettier
$ yarn format

# Checks if all files are formatted with prettier
$ yarn check-format

# Checks typescript errors
$ yarn check-types

# CI validation command
$ yarn setup

# Run Storybook
$ yarn storybook

# Build Storybook
$ yarn build-storybook

# Analyzes the compiled files with webpack-bundle-analyzer
$ yarn analyze

# Checks for circular dependencies during development build
$ yarn check_circular

# Generate json file with circular dependencies
$ yarn check_circular:write

# Commits with karma interface
$ yarn commit
```

## Tests

- Unit tests are in test/jest/unit.

## CI configuration

- Set the environment variables in the CI environment variable section.
- The only command needed to be put on CI is 'yarn setup' which tests formatting with prettier, eslint errors, typescript errors and all tests.

## Deploy

1. First, be sure you did all steps from the configuration section.
2. 'yarn build' command will compile all files and put them into build folder.
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

[Codcov](https://app.codecov.io/gh/DanielFerrariR/map-challenge)
[Website](https://fluffy-griffin-fa508e.netlify.app)
