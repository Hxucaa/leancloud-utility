/**
 * Created by Lance on 2015-12-19.
 */


import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import { matchEnum } from "./utility/Toolbox";

module.exports = function(AV) { // eslint-disable-line max-statements
  const CM = require("cloudmodel")(AV);
  const UserType = CM.UserType;
  const UserStatus = CM.UserStatus;
  const Gender = CM.Gender;
  const AgeGroup = CM.AgeGroup;
  const Horoscope = CM.Horoscope;

  const success = ValidationAF.Success;
  const failure = ValidationAF.Failure;

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
      return Validator.isAlphanumeric(username) ?
        success(username) :
        failure([new ValidationError(
          1001,
          "Username can only contain only letters and numbers."
        )]);
    }

    /**
     * Check whether the username has between 5 to 30 characters inclusively.
     * @function isUsernameLength
     * @param {string} username - The username of User object.
     * @returns {Validation} A Validation object containing the result.
     */
    function isUsernameLength(username) {
      return Validator.isLength(username, 5, 29) ?
        success(username) :
        failure([new ValidationError(
          1002,
          "Username has to have between 5 to 30 characters."
        )]);
    }

    return success(curryN(2, (a, b) => {
      return [a, b];
    }))
      .ap(isUsernameAlphanumeric(username))
      .ap(isUsernameLength(username));
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
      return Validator.isLength(password, 8, 49) ?
        success(password) :
        failure([new ValidationError(
          1003,
          "Password has to have between 8 to 50 characters."
        )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(isPasswordLength(password));
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
      return matchEnum(type, UserType, [new ValidationError(
        1100,
        "Type has to match its enum value."
      )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(isTypeEnumUserType(type));
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
      return matchEnum(status, UserStatus, [new ValidationError(
        1100,
        "Status has to match its enum value."
      )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(isStatusEnumUserStatus(status));
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
      return matchEnum(gender, Gender, [new ValidationError(
        1100,
        "Gender has to match its enum value."
      )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(isGenderEnumGender(gender));
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
      const currentDate = new Date();
      const min = new Date(currentDate);
      const max = new Date(currentDate);

      min.setYear(currentDate.getFullYear() - 100);
      max.setYear(currentDate.getFullYear() - 17);

      return Validator.isAfter(birthday, min) && Validator.isBefore(birthday, max) ?
        success(birthday) :
        failure([new ValidationError(
          1004,
          "Brithday has to be in the range of (-100, -17) years."
        )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(isBirthdayInRnage(birthday));
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
      return matchEnum(ageGroup, AgeGroup, [new ValidationError(
        1100,
        "AgeGroup has to match its enum value."
      )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(matchesEnumAgeGroup(ageGroup));
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
      return matchEnum(horoscope, Horoscope, [new ValidationError(
        1100,
        "Horoscope has to match its enum value."
      )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(matchesEnumHoroscope(horoscope));
  }

  /**
   * Verify whatsUp.
   * @alias module:ValidationStack/UserValidation.verifyWhatsUp
   * @param {string|WhatsUp} whatsUp - The whatsUp status of User object.
   * @returns {Validation} An Validation object containing the results.
   */
  function verifyWhatsUp(whatsUp) {
    /**
     * Check whether the username has 30 or less characters
     * @function isWhatsUpLength
     * @param {string} whatsUp - The whatsUp status of User object.
     * @returns {Validation} A Validation object containing the results.
     */
    function isWhatsUpLength(whatsUp) {
      return Validator.isLength(whatsUp, 0, 29) ?
        success(whatsUp) :
        failure([new ValidationError(
          1005,
          "WhatsUp has to have 30 or less characters."
        )]);
    }

    return success(curryN(1, a => {
      return [a];
    }))
      .ap(isWhatsUpLength(whatsUp));
  }

  return {
    verifyUsername,
    verifyPassword,
    verifyType,
    verifyStatus,
    verifyGender,
    verifyBirthday,
    verifyAgeGroup,
    verifyHoroscope,
    verifyWhatsUp
  };
};
