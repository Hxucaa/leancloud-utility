"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyEmail = verifyEmail;
exports.verifyName = verifyName;
exports.verifyUrl = verifyUrl;
exports.verifyDecription = verifyDecription;

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _index = require("./utility/validation/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var success = _index.ValidationAF.Success;
var failure = _index.ValidationAF.Failure;

function verifyEmail(email) {
  function isEmailFormat(email) {
    return _validator2.default.isEmail(email) ? success(email) : failure([new _index.ValidationError(1111, "Email format is invalid")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isEmailFormat(email));
}

function verifyName(name) {
  function isNameLength(name) {
    return _validator2.default.isLength(name, 0, 19) ? success(name) : failure([new _index.ValidationError(1005, "Nickname has to have 20 or less characters.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isNameLength(name));
}

function verifyUrl(url) {
  function isUrlFormat(url) {
    return _validator2.default.isURL(url) ? success(url) : failure([new _index.ValidationError(1111, "Url format is invalid")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isUrlFormat(url));
}

function verifyDecription(description) {
  function isDescriptionLength(description) {
    return _validator2.default.isLength(description, 0, 499) ? success(description) : failure([new _index.ValidationError(1005, "Business description has to have 500 or less characters.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isDescriptionLength(description));
}