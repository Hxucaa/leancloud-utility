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
 * @module AddressValidation
 * @memberof validation
 */

 /**
  * Check whether the streetname is less than 100 characters long.
  * @function isStreetLength
  * @param {string} street - The street of Address object.
  * @returns {Validation} A Validation object containing the result.
  */
export function verifyStreet(street) {
 /**
  * Check whether the streetname is less than 100 characters long.
  * @function isStreetLength
  * @param {string} street - The street of Address object.
  * @returns {Validation} A Validation object containing the result.
  */
  function isStreetLength(street) {
    return Validator.isLength(street, 0, 99) ?
     success(street) :
     failure([new ValidationError(
       1005,
       "address has to be less than 100 characters."
     )]);
  }

  return success(curryN(2, (a, b) => {
    return [a, b];
  }))
   .ap(isStreetLength(street));
}
