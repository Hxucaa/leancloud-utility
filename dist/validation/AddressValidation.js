"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyStreet = verifyStreet;
exports.verifyRegionCode = verifyRegionCode;

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _index = require("./utility/validation/index");

var _Region = require("../model/enum/Region");

var _Region2 = _interopRequireDefault(_Region);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var success = _index.ValidationAF.Success;
var failure = _index.ValidationAF.Failure;

function verifyStreet(street) {
  function isStreetLength(street) {
    return _validator2.default.isLength(street, 0, 99) ? success(street) : failure([new _index.ValidationError(1005, "address has to be less than 100 characters.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isStreetLength(street));
}

function verifyRegionCode(regionCode) {
  function matchesRegionCode(regionCode) {

    return _Region2.default.matchByCode(regionCode) ? success(regionCode) : failure([new _index.ValidationError(1100, "region has to match its enum value.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(matchesRegionCode(regionCode));
}