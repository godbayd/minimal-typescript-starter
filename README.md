# Minimal Vanilla Typescript Starter
#### 04-23-2021

# Usage
- see package.json scripts
- ```npm run start``` to run tsc in watch mode (sort of like nodemon)
- ```npm run build``` to build project into ./dist directory
- ```npm t[est]``` to run jest tests (see .src/tests/*)
may be able to ommit the ```run``` portion of those commands???


### In tsconfig.js
- it was important to ommit the "module: CommonJs" for webpack build to work properly

### In package.json
- "start": "npx tsc ./src/index.ts --watch"
- will run like nodemon but with type checking


### Jest stuff
- jest.config.js specifies 'presets' which is important in order to run tests on typescript files
