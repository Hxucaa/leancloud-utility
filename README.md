= Validation Stack =


= Folder Structure =

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
|   README.md   <<This file>>
└── index.js   <<Starting point of this project>>

```