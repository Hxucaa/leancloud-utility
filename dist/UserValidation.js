"use strict";

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _index = require("./utility/validation/index");

var _Toolbox = require("./utility/Toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (AV) {
  // eslint-disable-line max-statements
  var CM = require("cloudmodel")(AV);
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
   * Verify the username.
   * @alias module:ValidationStack/UserValidation.verifyUsername
   * @param {string} username - The username of User object.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyUsername(username) {

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

    return success((0, _index.curryN)(2, function (a, b) {
      return [a, b];
    })).ap(isUsernameAlphanumeric(username)).ap(isUsernameLength(username));
  }

  /**
   * Verify the password.
   * @alias module:ValidationStack/UserValidation.verifyPassword
   * @param {string} password - The password of User object.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyPassword(password) {

    /**
     * Check whether the password has between 8 to 50 characters inclusively.
     * @function isPasswordLength
     * @param {string} password - The password of User object.
     * @returns {Validation} A Validation object containing the result.
     */
    function isPasswordLength(password) {
      return _validator2.default.isLength(password, 8, 49) ? success(password) : failure([new _index.ValidationError(1003, "Password has to have between 8 to 49 characters.")]);
    }

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(isPasswordLength(password));
  }

  /**
   * Verify the type.
   * @alias module:ValidationStack/UserValidation.verifyType
   * @param {number|UserType} type - The enum UserType.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyType(type) {

    /**
     * Check whether the type variable matches the values of enum UserType.
     * @function isTypeEnumUserType
     * @param {number|UserType} type - The enum UserType.
     * @returns {Validation} An Validation object containing the results.
     */
    function isTypeEnumUserType(type) {
      return (0, _Toolbox.matchEnum)(type, UserType, [new _index.ValidationError(1100, "Type has to match its enum value.")]);
    }

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(isTypeEnumUserType(type));
  }

  /**
   * Verify the status.
   * @alias module:ValidationStack/UserValidation.verifyStatus
   * @param {number|UserStatus} status - The enum UserStatus.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyStatus(status) {

    /**
     * Check whether the type variable matches the values of enum UserStatus.
     * @function isStatusEnumUserStatus
     * @param {number|UserStatus} status - The enum UserStatus.
     * @returns {Validation} An Validation object containing the results.
     */
    function isStatusEnumUserStatus(status) {
      return (0, _Toolbox.matchEnum)(status, UserStatus, [new _index.ValidationError(1100, "Status has to match its enum value.")]);
    }

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(isStatusEnumUserStatus(status));
  }

  /**
   * Verify gender.
   * @alias module:ValidationStack/UserValidation.verifyGender
   * @param {number|Gender} gender - The enum Gender.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyGender(gender) {

    /**
     * Check whether the gender variable matches the value of enum Gender.
     * @function isGenderEnumGender
     * @param {number|Gender} gender - The enum Gender.
     * @returns {Validation} An Validation object containing the results.
     */
    function isGenderEnumGender(gender) {
      return (0, _Toolbox.matchEnum)(gender, Gender, [new _index.ValidationError(1100, "Gender has to match its enum value.")]);
    }

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(isGenderEnumGender(gender));
  }

  /**
   * Verify birhtday.
   * @alias module:ValidationStack/UserValidation.verifyBirthday
   * @param {date} birthday - The date of birth.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyBirthday(birthday) {

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

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(isBirthdayInRnage(birthday));
  }

  /**
   * Verify ageGroup.
   * @alias module:ValidationStack/UserValidation.verifyAgeGroup
   * @param {number|AgeGroup} ageGroup - The enum AgeGroup.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyAgeGroup(ageGroup) {

    /**
     * Check whether the ageGroup variable matches values of enum AgeGroup.
     * @function matchesEnumAgeGroup
     * @param {number|AgeGroup} ageGroup - The enum AgeGroup.
     * @returns {Validation} An Validation object containing the results.
     */
    function matchesEnumAgeGroup(ageGroup) {
      return (0, _Toolbox.matchEnum)(ageGroup, AgeGroup, [new _index.ValidationError(1100, "AgeGroup has to match its enum value.")]);
    }

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(matchesEnumAgeGroup(ageGroup));
  }

  /**
   * Verify horoscope.
   * @alias module:ValidationStack/UserValidation.verifyHoroscope
   * @param {number|Horoscope} horoscope - The enum Horoscope.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyHoroscope(horoscope) {

    /**
     * Check whether the horoscope variable matches values of enum Horoscope.
     * @function matchesEnumHoroscope
     * @param {number|Horoscope} horoscope - The enum Horoscope.
     * @returns {Validation} An Validation object containing the results.
     */
    function matchesEnumHoroscope(horoscope) {
      return (0, _Toolbox.matchEnum)(horoscope, Horoscope, [new _index.ValidationError(1100, "Horoscope has to match its enum value.")]);
    }

    return success((0, _index.curryN)(1, function (a) {
      return [a];
    })).ap(matchesEnumHoroscope(horoscope));
  }

  return {
    verifyUsername: verifyUsername,
    verifyPassword: verifyPassword,
    verifyType: verifyType,
    verifyStatus: verifyStatus,
    verifyGender: verifyGender,
    verifyBirthday: verifyBirthday,
    verifyAgeGroup: verifyAgeGroup,
    verifyHoroscope: verifyHoroscope
  };
}; /**
    * Created by Lance on 2015-12-19.
    */