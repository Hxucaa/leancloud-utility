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
  * @function isValidEmail
  * @param {string} email - The email of Business object.
  * @returns {Validation} A Validation object containing the result.
  */
export function verifyEmail(email) {
  /**
   * Check whether the business email is valid.
   * @function isValidEmail
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

  return success(curryN(2, (a, b) => {
    return [a, b];
  }))
   .ap(isEmailFormat(email));
}
