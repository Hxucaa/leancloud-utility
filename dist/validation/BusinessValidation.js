"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyEmail = verifyEmail;

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

  return success((0, _index.curryN)(2, function (a, b) {
    return [a, b];
  })).ap(isEmailFormat(email));
}