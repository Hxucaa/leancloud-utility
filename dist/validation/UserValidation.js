"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUsername = verifyUsername;
exports.verifyPassword = verifyPassword;
exports.verifyType = verifyType;
exports.verifyStatus = verifyStatus;
exports.verifyGender = verifyGender;
exports.verifyBirthday = verifyBirthday;
exports.verifyAgeGroup = verifyAgeGroup;
exports.verifyHoroscope = verifyHoroscope;
exports.verifyWhatsUp = verifyWhatsUp;

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _index = require("./utility/validation/index");

var _Toolbox = require("./utility/Toolbox");

var _UserType = require("../model/enum/UserType");

var _UserType2 = _interopRequireDefault(_UserType);

var _UserStatus = require("../model/enum/UserStatus");

var _UserStatus2 = _interopRequireDefault(_UserStatus);

var _Gender = require("../model/enum/Gender");

var _Gender2 = _interopRequireDefault(_Gender);

var _AgeGroup = require("../model/enum/AgeGroup");

var _AgeGroup2 = _interopRequireDefault(_AgeGroup);

var _Horoscope = require("../model/enum/Horoscope");

var _Horoscope2 = _interopRequireDefault(_Horoscope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var success = _index.ValidationAF.Success;
var failure = _index.ValidationAF.Failure;

function verifyUsername(username) {
  function isUsernameAlphanumeric(username) {
    return _validator2.default.isAlphanumeric(username) ? success(username) : failure([new _index.ValidationError(1001, "Username can only contain only letters and numbers.")]);
  }

  function isUsernameLength(username) {
    return _validator2.default.isLength(username, 5, 29) ? success(username) : failure([new _index.ValidationError(1002, "Username has to have between 5 to 30 characters.")]);
  }

  return success((0, _index.curryN)(2, function (a, b) {
    return [a, b];
  })).ap(isUsernameAlphanumeric(username)).ap(isUsernameLength(username));
}

function verifyPassword(password) {
  function isPasswordLength(password) {
    return _validator2.default.isLength(password, 8, 49) ? success(password) : failure([new _index.ValidationError(1003, "Password has to have between 8 to 50 characters.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isPasswordLength(password));
}

function verifyType(type) {
  function isTypeEnumUserType(type) {
    return (0, _Toolbox.matchEnum)(type, _UserType2.default, [new _index.ValidationError(1100, "Type has to match its enum value.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isTypeEnumUserType(type));
}

function verifyStatus(status) {
  function isStatusEnumUserStatus(status) {
    return (0, _Toolbox.matchEnum)(status, _UserStatus2.default, [new _index.ValidationError(1100, "Status has to match its enum value.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isStatusEnumUserStatus(status));
}

function verifyGender(gender) {
  function isGenderEnumGender(gender) {
    return (0, _Toolbox.matchEnum)(gender, _Gender2.default, [new _index.ValidationError(1100, "Gender has to match its enum value.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isGenderEnumGender(gender));
}

function verifyBirthday(birthday) {
  function isBirthdayInRnage(birthday) {
    var currentDate = new Date();
    var min = new Date(currentDate);
    var max = new Date(currentDate);

    min.setYear(currentDate.getFullYear() - 100);
    max.setYear(currentDate.getFullYear() - 17);

    return _validator2.default.isAfter(birthday, min) && _validator2.default.isBefore(birthday, max) ? success(birthday) : failure([new _index.ValidationError(1004, "Brithday has to be in the range of (-100, -17) years.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isBirthdayInRnage(birthday));
}

function verifyAgeGroup(ageGroup) {
  function matchesEnumAgeGroup(ageGroup) {
    return (0, _Toolbox.matchEnum)(ageGroup, _AgeGroup2.default, [new _index.ValidationError(1100, "AgeGroup has to match its enum value.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(matchesEnumAgeGroup(ageGroup));
}

function verifyHoroscope(horoscope) {
  function matchesEnumHoroscope(horoscope) {
    return (0, _Toolbox.matchEnum)(horoscope, _Horoscope2.default, [new _index.ValidationError(1100, "Horoscope has to match its enum value.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(matchesEnumHoroscope(horoscope));
}

function verifyWhatsUp(whatsUp) {
  function isWhatsUpLength(whatsUp) {
    return _validator2.default.isLength(whatsUp, 0, 29) ? success(whatsUp) : failure([new _index.ValidationError(1005, "WhatsUp has to have 30 or less characters.")]);
  }

  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isWhatsUpLength(whatsUp));
}