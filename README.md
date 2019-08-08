# Phaser 3 Webpack Project Template for Typescript

A Phaser 3 project template with TypeScript support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/)
that includes hot-reloading for development and production-ready builds.

## Requirements

[Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) are required to install dependencies and run scripts.

## Available Commands

| Command | Description |
|---------|-------------|
| `yarn install` | Installs project dependencies |
| `yarn lint`  | Performs type checks using tsc with eslint |
| `yarn start` | Builds the project and opens web browser to the local server |
| `yarn build` | Builds the code bundle with production settings (minification etc.) |

## Writing Code

After cloning the repo, run `yarn install` from your project directory. Then, start your local development
server by running `yarn start`. When you edit project files in the `src` folder, webpack will automatically
recompile and reload your server (available at `http://localhost:8080`
by default).

## About

This was my attempt at a TypeScript version of Richard Davey's [phaser3-project-template](https://github.com/photonstorm/phaser3-project-template) for ES6.