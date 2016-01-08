/**
 * Created by cwang on 2016-1-7.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import Region from "../model/enum/Region";

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
  * @alias BusinessValidation.verifyStreet
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

  return success(curryN(1, a => {
    return [a];
  }))
   .ap(isStreetLength(street));
}

/**
 * Verify whether code matches one of the values of Region.
 * @alias module:AddressValidation.verifyRegion
 * @param {string} regionCode - The code of matching Region.
 * @returns {Validation} A Validation object containing the result.
 */
export function verifyRegionCode(regionCode) {

  /**
   * Check whether the code matches
   * @param {string} regionCode - The code of matching Region.
   * @returns {Validation} A Validation object containing the result.
   */
  function matchesRegionCode(regionCode) {

    return Region.matchByCode(regionCode) ?
      success(regionCode) :
      failure([new ValidationError(
        1100,
        "region has to match its enum value."
      )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(matchesRegionCode(regionCode));
}
