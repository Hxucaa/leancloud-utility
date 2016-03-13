# Leancloud Utility [![Build Status](https://travis-ci.org/ZenChat/validation-stack.svg?branch=master)](https://travis-ci.org/ZenChat/leancloud-utility) [![Coverage Status](https://coveralls.io/repos/ZenChat/leancloud-utility/badge.svg?branch=master&service=github)](https://coveralls.io/github/ZenChat/leancloud-utility?branch=master)


# Folder Structure

```npm
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
Unit and generative tests only for this repo.
Run the following command for testing: `gulp test`. To continuously watch code change and run test, use this command: `gulp test:w`.

## Testing concepts
TBD

# How to release?
Before releasing run the following two commands to generate transipled es5 code and documentation. We are using [semantic versioning](http://semver.org/):
1. Run `git log --oneline` and cherry pick changes to edit the CHANGELOG.md file
2. Run `git commit -am "message"` to commit you work
3. Run `npm version <update_type>` to update the version, this will automatically change the version number in package.json and add a tag to the repo
4. If this is the first running publishing to npm, it will ask you for credentials. Please talk to time lead about this.
5. Run `npm publish` to publish
6. Run `git push --follow-tags` - this will push two commits, one for your changes and one for npm versioning.

## Why versioning?
You cannot just change the version number with feature updates because you have to wonder if that feature update would really be the version you want to release. Therefore, we'd accumulate updates in the master. Once it hit a threshold, we release the stuff up until that point. This is why it's important the version bump has to be its own commit, it cannot be combined with feature updates.

Another reason is that leancloud-utility is used by RN, leancloud-server, and deployed on leancloud. Pointing directly to package repository would always download the latest version. However the latest version is master's HEAD so it may not work - breaking changes, etc.

