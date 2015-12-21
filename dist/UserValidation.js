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

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _index = require("./utility/validation/index");

var _Toolbox = require("./utility/Toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CM = require("cloudmodel"); // eslint-disable-line import/no-require
/**
 * Created by Lance on 2015-12-19.
 */

var UserType = CM.UserType;
var UserStatus = CM.UserStatus;
var Gender = CM.Gender;
var AgeGroup = CM.AgeGroup;
var Horoscope = CM.Horoscope;

var success = _index.ValidationAF.Success;
var failure = _index.ValidationAF.Failure;

/**
 * @module ValidationStack/UserValidation
 */

/**
 * Check whether the username only has alphanumeric symbols.
 * @function isUsernameAlphanumeric
 * @param {string} username - The username of User object.
 * @returns {Validation} A Validation object containing the result.
 */
function isUsernameAlphanumeric(username) {
  return _validator2.default.isAlphanumeric(username) ? success(username) : failure([new _index.ValidationError(1001, "Username can only contain only letters and numbers.")]);
}

/**
 * Check whether the username has between 5 to 30 characters inclusively.
 * @function isUsernameLength
 * @param {string} username - The username of User object.
 * @returns {Validation} A Validation object containing the result.
 */
function isUsernameLength(username) {
  return _validator2.default.isLength(username, 5, 29) ? success(username) : failure([new _index.ValidationError(1002, "Username has to have between 5 to 30 characters.")]);
}

/**
 * Verify the username.
 * @alias module:ValidationStack/UserValidation.verifyUsername
 * @param {string} username - The username of User object.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyUsername(username) {
  return success((0, _index.curryN)(2, function (a, b) {
    return [a, b];
  })).ap(isUsernameAlphanumeric(username)).ap(isUsernameLength(username));
}

/**
 * Check whether the password has between 8 to 50 characters inclusively.
 * @function isPasswordLength
 * @param {string} password - The password of User object.
 * @returns {Validation} A Validation object containing the result.
 */
function isPasswordLength(password) {
  return _validator2.default.isLength(password, 8, 49) ? success(password) : failure([new _index.ValidationError(1003, "Password has to have between 8 to 49 characters.")]);
}

/**
 * Verify the password.
 * @alias module:ValidationStack/UserValidation.verifyPassword
 * @param {string} password - The password of User object.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyPassword(password) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isPasswordLength(password));
}

/**
 * Check whether the type variable matches the values of enum UserType.
 * @function isTypeEnumUserType
 * @param {number|UserType} type - The enum UserType.
 * @returns {Validation} An Validation object containing the results.
 */
function isTypeEnumUserType(type) {
  return (0, _Toolbox.matchEnum)(type, UserType, [new _index.ValidationError(1100, "Type has to match its enum value.")]);
}

/**
 * Verify the type.
 * @alias module:ValidationStack/UserValidation.verifyType
 * @param {number|UserType} type - The enum UserType.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyType(type) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isTypeEnumUserType(type));
}

/**
 * Check whether the type variable matches the values of enum UserStatus.
 * @function isStatusEnumUserStatus
 * @param {number|UserStatus} status - The enum UserStatus.
 * @returns {Validation} An Validation object containing the results.
 */
function isStatusEnumUserStatus(status) {
  return (0, _Toolbox.matchEnum)(status, UserStatus, [new _index.ValidationError(1100, "Status has to match its enum value.")]);
}

/**
 * Verify the status.
 * @alias module:ValidationStack/UserValidation.verifyStatus
 * @param {number|UserStatus} status - The enum UserStatus.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyStatus(status) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isStatusEnumUserStatus(status));
}

/**
 * Check whether the gender variable matches the value of enum Gender.
 * @function isGenderEnumGender
 * @param {number|Gender} gender - The enum Gender.
 * @returns {Validation} An Validation object containing the results.
 */
function isGenderEnumGender(gender) {
  return (0, _Toolbox.matchEnum)(gender, Gender, [new _index.ValidationError(1100, "Gender has to match its enum value.")]);
}

/**
 * Verify gender.
 * @alias module:ValidationStack/UserValidation.verifyGender
 * @param {number|Gender} gender - The enum Gender.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyGender(gender) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isGenderEnumGender(gender));
}

/**
 * Is brithday with in the range of (-100, -17) years.
 * @function isBirthdayInRange
 * @param {date} birthday - The date of birth.
 * @returns {boolean} Indicate whether the birthday is within the allowed range.
 */
function isBirthdayInRnage(birthday) {
  var currentDate = new Date();
  var min = new Date(currentDate);
  var max = new Date(currentDate);

  min.setYear(currentDate.getFullYear() - 100);
  max.setYear(currentDate.getFullYear() - 17);

  return _validator2.default.isAfter(birthday, min) && _validator2.default.isBefore(birthday, max) ? success(birthday) : failure([new _index.ValidationError(1004, "Brithday has to be in the range of (-100, -17) years.")]);
}

/**
 * Verify birhtday.
 * @alias module:ValidationStack/UserValidation.verifyBirthday
 * @param {date} birthday - The date of birth.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyBirthday(birthday) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(isBirthdayInRnage(birthday));
}

/**
 * Check whether the ageGroup variable matches values of enum AgeGroup.
 * @function matchesEnumAgeGroup
 * @param {number|AgeGroup} ageGroup - The enum AgeGroup.
 * @returns {Validation} An Validation object containing the results.
 */
function matchesEnumAgeGroup(ageGroup) {
  return (0, _Toolbox.matchEnum)(ageGroup, AgeGroup, [new _index.ValidationError(1100, "AgeGroup has to match its enum value.")]);
}

/**
 * Verify ageGroup.
 * @alias module:ValidationStack/UserValidation.verifyAgeGroup
 * @param {number|AgeGroup} ageGroup - The enum AgeGroup.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyAgeGroup(ageGroup) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(matchesEnumAgeGroup(ageGroup));
}

/**
 * Check whether the horoscope variable matches values of enum Horoscope.
 * @function matchesEnumHoroscope
 * @param {number|Horoscope} horoscope - The enum Horoscope.
 * @returns {Validation} An Validation object containing the results.
 */
function matchesEnumHoroscope(horoscope) {
  return (0, _Toolbox.matchEnum)(horoscope, Horoscope, [new _index.ValidationError(1100, "Horoscope has to match its enum value.")]);
}

/**
 * Verify horoscope.
 * @alias module:ValidationStack/UserValidation.verifyHoroscope
 * @param {number|Horoscope} horoscope - The enum Horoscope.
 * @returns {Validation} An Validation object containing the results.
 */
function verifyHoroscope(horoscope) {
  return success((0, _index.curryN)(1, function (a) {
    return [a];
  })).ap(matchesEnumHoroscope(horoscope));
}