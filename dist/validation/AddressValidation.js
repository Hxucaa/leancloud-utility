"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyStreet = verifyStreet;

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _index = require("./utility/validation/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var success = _index.ValidationAF.Success;
var failure = _index.ValidationAF.Failure;

function verifyStreet(street) {
  function isStreetLength(street) {
    return _validator2.default.isLength(street, 0, 99) ? success(street) : failure([new _index.ValidationError(1005, "address has to be less than 100 characters.")]);
  }

  return success((0, _index.curryN)(2, function (a, b) {
    return [a, b];
  })).ap(isStreetLength(street));
}