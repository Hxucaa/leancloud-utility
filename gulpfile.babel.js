/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

import gulp from "gulp";
import runSequence from "run-sequence";
import mocha from "gulp-spawn-mocha";
import gutil from "gulp-util";
import eslint from "gulp-eslint";
import shell from "gulp-shell";
import del from "del";
import babel from "gulp-babel";

import jsdocConf from "./jsdoc.conf.json";
import pkg from "./package.json";

const lintSrc = [
  "!dist/**",
  "!coverage/**",
  "!jsdoc/**",
  "src/**/*.js",
  "test/**/*.js",
  "gulpfile.babel.js",
  "gulp/**/*.js",
  "eslint.rc"
];

gulp.task("default", () => {

});


gulp.task("test:unit", () => {

  process.env.NODE_ENV = "test";

  return gulp
    .src(["test/unit/**/*.js"], { read: false })
    .pipe(mocha({
      compilers: "js:babel-core/register",
      reporter: "nyan",
      timeout: 5000,
      ignoreLeaks: false,
      recursive: true,
      harmony: true
    }))
    .on("error", gutil.log);
});

gulp.task("test:gen", () => {

  process.env.NODE_ENV = "test";

  return gulp
    .src(["test/generative/**/*.js"], { read: false })
    .pipe(mocha({
      compilers: "js:babel-core/register",
      reporter: "nyan",
      timeout: 5000,
      ignoreLeaks: false,
      recursive: true,
      harmony: true
    }))
    .on("error", gutil.log);
});

gulp.task("test", callback => {
  runSequence(
    "lint",
    "test:unit",
    "test:gen",
    callback
  );
});

gulp.task("test:w", ["test"], () => {
  gulp.watch(
    ["src/**", "test/**"],
    ["test"]
  );
});

gulp.task("coverage:unit", ["clean:coverage:unit"], () => {
  return gulp
    .src(["README.md"], { read: false })
    .pipe(shell(["NODE_ENV=test node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover --dir coverage/unit-test node_modules/.bin/_mocha -- test/unit --opts test/mocha.opts --harmony"]));  // eslint-disable-line max-len
});

gulp.task("coverage:unit:w", ["coverage:unit"], () => {
  gulp.watch(lintSrc, ["coverage:unit"]);
});

gulp.task("coverage:unit:ci", ["clean:coverage:unit"], () => {
  return gulp
    .src(["README.md"], { read: false })
    .pipe(shell(["NODE_ENV=ci node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover --dir coverage/unit-test node_modules/.bin/_mocha -- -R dot test/unit --opts test/mocha.opts --harmony"]));  // eslint-disable-line max-len
});

gulp.task("coverage:gen", ["clean:coverage:gen"], () => {
  return gulp
    .src(["README.md"], { read: false })
    .pipe(shell(["NODE_ENV=test node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover --dir coverage/generative-test node_modules/.bin/_mocha -- test/generative --opts test/mocha.opts --harmony"]));  // eslint-disable-line max-len
});

gulp.task("coverage:gen:w", ["coverage:gen"], () => {
  gulp.watch(lintSrc, ["coverage:unit"]);
});

gulp.task("coverage:gen:ci", ["clean:coverage:gen"], () => {
  return gulp
    .src(["README.md"], { read: false })
    .pipe(shell(["NODE_ENV=ci node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover --dir coverage/generative-test node_modules/.bin/_mocha -- -R dot test/generative --opts test/mocha.opts --harmony"]));  // eslint-disable-line max-len
});


gulp.task("coverage", ["coverage:unit", "coverage:gen"]);
gulp.task("coverage:ci", ["coverage:unit:ci", "coverage:gen:ci"]);

gulp.task("lint", () => {
  // ESLint ignores files with "node_modules" paths.
  // So, it"s best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(lintSrc)
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      warnFileIgnored: true,
      fix: true,
      useEslintrc: true
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format());
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  //.pipe(eslint.failAfterError());
});

gulp.task("lint:w", ["lint"], () => {
  gulp.watch(lintSrc, ["lint"]);
});

gulp.task("jsdoc", ["clean:jsdoc"], () => {
  return gulp
  // has to to load a dummy file, otherwise the stream won't run
    .src(["README.md"], { read: false })
    .pipe(shell(["./node_modules/.bin/jsdoc -t ./node_modules/ink-docstrap/template -c jsdoc.conf.json"])); // eslint-disable-line max-len
});

gulp.task("jsdoc:w", ["jsdoc"], () => {
  gulp.watch(["src/**"], ["jsdoc"]);
});

gulp.task("build", ["clean:build"], () => {
  return gulp
    .src(["src/**"], { base: "./src" })
    .pipe(babel({
      presets: ["es2015"],
      comments: false
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("build:w", ["build"], () => {
  gulp.watch(["src/**"]);
});

gulp.task("clean:build", () => {
  return del([
    "dist/**"
  ]);
});

gulp.task("clean:coverage:unit", () => {
  return del([
    "coverage/unit-test/**"
  ]);
});

gulp.task("clean:coverage:gen", () => {
  return del([
    "coverage/generative-test/**"
  ]);
});

gulp.task("clean:jsdoc", () => {

  return del([
    jsdocConf.opts.destination
  ]);
});

gulp.task("watch", ["test:w", "lint:w", "dist:compile:w", "jsdoc:w"]);

gulp.task("help", () => { // eslint-disable-line max-statements
  gutil.log("");
  gutil.log(`--- ${pkg.name} Version: ${pkg.version} ---`);
  gutil.log("");
  gutil.log("See all of the available tasks:");
  gutil.log("$ gulp -T");
  gutil.log("");
  gutil.log("Run eslint:");
  gutil.log("$ gulp lint");
  gutil.log("");
  gutil.log("Watch lint");
  gutil.log("$ gulp lint:w");
  gutil.log("");
  gutil.log("Run all tests");
  gutil.log("$ gulp test");
  gutil.log("");
  gutil.log("Run only unit tests");
  gutil.log("$ gulp test:unit");
  gutil.log("");
  gutil.log("Watch tests");
  gutil.log("$ gulp test:w");
  gutil.log("");
  gutil.log("Continuously run lint, tests, jsdoc generation, and " +
    "distribution code generation on file change");
  gutil.log("$ gulp watch");
  gutil.log("");
  gutil.log("Generate jsdoc");
  gutil.log("$ gulp jsdoc");
  gutil.log("");
  gutil.log("Compile server");
  gutil.log("$ gulp dist:compile");
  gutil.log("");
  gutil.log(`--- ${pkg.name} Version: ${pkg.version} ---`);
  gutil.log("");
});
