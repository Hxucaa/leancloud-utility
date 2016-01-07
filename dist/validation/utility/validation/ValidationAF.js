

"use strict";

module.exports = Validation;

var clone = Object.create;
var unimplemented = function unimplemented() {
  throw new Error("Not implemented.");
};
var noop = function noop() {
  return this;
};

function Validation() {}

Failure.prototype = clone(Validation.prototype);
function Failure(a) {
  this.value = a;
}

Success.prototype = clone(Validation.prototype);
function Success(a) {
  this.value = a;
}

Validation.Failure = function (a) {
  return new Failure(a);
};
Validation.prototype.Failure = Validation.Failure;

Validation.Success = function (a) {
  return new Success(a);
};
Validation.prototype.Success = Validation.Success;

Validation.fromNullable = function (a) {
  return a !== null ? this.Success(a) : this.Failure(a);
};
Validation.prototype.fromNullable = Validation.fromNullable;

Validation.fromEither = function (a) {
  return a.fold(this.Failure.bind(this), this.Success.bind(this));
};

Validation.prototype.isFailure = false;
Failure.prototype.isFailure = true;

Validation.prototype.isSuccess = false;
Success.prototype.isSuccess = true;

Validation.of = function (a) {
  return this.Success(a);
};
Validation.prototype.of = Validation.of;

Validation.prototype.ap = unimplemented;

Failure.prototype.ap = function (b) {
  return b.isFailure ? this.Failure(this.value.concat(b.value)) : this;
};

Success.prototype.ap = function (b) {
  return b.isFailure ? b : b.map(this.value);
};

Validation.prototype.map = unimplemented;
Failure.prototype.map = noop;

Success.prototype.map = function (f) {
  return this.of(f(this.value));
};

Validation.prototype.toString = unimplemented;

Failure.prototype.toString = function () {
  return "Validation.Failure(" + this.value + ")";
};

Success.prototype.toString = function () {
  return "Validation.Success(" + this.value + ")";
};

Validation.prototype.isEqual = unimplemented;

Failure.prototype.isEqual = function (a) {
  return a.isFailure && a.value === this.value;
};

Success.prototype.isEqual = function (a) {
  return a.isSuccess && a.value === this.value;
};

Validation.prototype.get = unimplemented;

Failure.prototype.get = function () {
  throw new TypeError("Can't extract the value of a Failure(a).");
};

Success.prototype.get = function () {
  return this.value;
};

Validation.prototype.getOrElse = unimplemented;

Failure.prototype.getOrElse = function (a) {
  return a;
};

Success.prototype.getOrElse = function (_) {
  return this.value;
};

Validation.prototype.orElse = unimplemented;
Success.prototype.orElse = noop;

Failure.prototype.orElse = function (f) {
  return f(this.value);
};

Validation.prototype.merge = function () {
  return this.value;
};

Validation.prototype.fold = unimplemented;

Failure.prototype.fold = function (f, _) {
  return f(this.value);
};

Success.prototype.fold = function (_, g) {
  return g(this.value);
};

Validation.prototype.cata = unimplemented;

Failure.prototype.cata = function (pattern) {
  return pattern.Failure(this.value);
};

Success.prototype.cata = function (pattern) {
  return pattern.Success(this.value);
};

Validation.prototype.swap = unimplemented;

Failure.prototype.swap = function () {
  return this.Success(this.value);
};

Success.prototype.swap = function () {
  return this.Failure(this.value);
};

Validation.prototype.bimap = unimplemented;

Failure.prototype.bimap = function (f, _) {
  return this.Failure(f(this.value));
};

Success.prototype.bimap = function (_, g) {
  return this.Success(g(this.value));
};

Validation.prototype.failureMap = unimplemented;
Success.prototype.failureMap = noop;

Failure.prototype.failureMap = function (f) {
  return this.Failure(f(this.value));
};

Validation.prototype.leftMap = Validation.prototype.failureMap;
Success.prototype.leftMap = Success.prototype.failureMap;
Failure.prototype.leftMap = Failure.prototype.failureMap;