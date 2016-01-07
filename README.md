# Leancloud Utility [![Build Status](https://travis-ci.org/ZenChat/validation-stack.svg?branch=master)](https://travis-ci.org/ZenChat/validation-stack) [![Coverage Status](https://coveralls.io/repos/ZenChat/leancloud-utility/badge.svg?branch=master&service=github)](https://coveralls.io/github/ZenChat/leancloud-utility?branch=master)


# Folder Structure

```
<<Root of the project>>
|-- dist    <<Transpiled code>>
|-- jsdoc   <<Documentation>>
|-- node_modules
|-- src     <<Validation source code>>
|-- test
|   ├── fixture <<Mock data shared among all tests>>
|   ├── helper  <<Mocha test helpers>>
|   ├── unit    <<Unit tests>>
|   .arcconfig  <<Arcanist configuration>>  DO NOT TOUCH
|   .arclint    <<Arcanist configuration>>  DO NOT TOUCH
|   .babelrc    <<Babel configuration>>  DO NOT TOUCH
|   .eslintignore   <<ESLint ignore>>  DO NOT TOUCH
|   .eslintrc   <<ESLint rules>>  DO NOT TOUCH
|   .gitignore  <<Git ignore>>  DO NOT TOUCH
|   .nvmrc  <<NVM configuration>>  DO NOT TOUCH
|   .travis.yml <<Travis configuration>>  DO NOT TOUCH
|   gulpfile.babel.js   <<Gulp tasks>>  DO NOT TOUCH
|   jsdoc.conf.json <<JSDoc configuration>>
|   package.json    <<Node.js package.json>>  DO NOT TOUCH unless you know what you are doing
|-- README.md   <<This file>>

```

# Testing
Testing for this project only requires unit tests and generative tests.
Run the following command for testing: `gulp test`. To continuously watch code change and run test, use this command: `gulp test:w`.

## Testing concepts
TBD

# How to release?
Before releasing run the following two commands to generate transipled es5 code and documentation.
1. `npm run jsdoc`
2. `npm run dist:compile`
