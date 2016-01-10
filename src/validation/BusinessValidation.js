/**
 * Created by cwang on 2016-1-7.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";

const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

/**
 * @namespace validation
 */

/**
 * @module BusinessValidation
 * @memberof validation
 */

 /**
  * Check whether the business email is valid.
  * @alias module:BusinessValidation.verifyEmail
  * @param {string} email - The email of Business object.
  * @returns {Validation} A Validation object containing the result.
  */
export function verifyEmail(email) {
  /**
   * Check whether the business email is valid.
   * @function isEmailFormat
   * @param {string} email - The email of Business object.
   * @returns {Validation} A Validation object containing the result.
   */
  function isEmailFormat(email) {
    return Validator.isEmail(email) ?
     success(email) :
     failure([new ValidationError(
       1111,
       "Email format is invalid"
     )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
   .ap(isEmailFormat(email));
}

/**
 * Check whether the business name has 20 or less characters
 * @alias module:BusinessValidation.verifyName
 * @param {string} name - The Businessname of Business object.
 * @returns {Validation} A Validation object containing the results.
 */
export function verifyName(name) {
  /**
   * Check whether the business name has 20 or less characters
   * @function isNameLength
   * @param {string} name - The Businessname of Business object.
   * @returns {Validation} A Validation object containing the results.
   */
  function isNameLength(name) {
    return Validator.isLength(name, 0, 19) ?
      success(name) :
      failure([new ValidationError(
        1005,
        "Nickname has to have 20 or less characters."
      )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isNameLength(name));
}

/**
 * Check whether the business url is valid.
 * @alias module:BusinessValidation.verifyUrl
 * @param {string} websiteUrl - The url of Business object.
 * @returns {Validation} A Validation object containing the result.
 */
export function verifyUrl(url) {
  /**
   * Check whether the business url is valid.
   * @function isUrlFormat
   * @param {string} websiteUrl - The url of Business object.
   * @returns {Validation} A Validation object containing the result.
   */
  function isUrlFormat(url) {
    return Validator.isURL(url) ?
    success(url) :
    failure([new ValidationError(
      1111,
      "Url format is invalid"
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
.ap(isUrlFormat(url));
}

/**
 * Check whether the business description has 500 or less characters
 * @alias module:BusinessValidation.verifyDescription
 * @param {string} description - The description of Business object.
 * @returns {Validation} A Validation object containing the results.
 */
export function verifyDescription(description) {
  /**
   * Check whether the business description has 500 or less characters
   * @function isDescriptionLength
   * @param {string} description - The description of Business object.
   * @returns {Validation} A Validation object containing the results.
   */
  function isDescriptionLength(description) {
    return Validator.isLength(description, 0, 499) ?
      success(description) :
      failure([new ValidationError(
        1005,
        "Business description has to have 500 or less characters."
      )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isDescriptionLength(description));
}
