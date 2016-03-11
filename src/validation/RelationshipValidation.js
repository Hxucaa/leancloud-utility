/**
 * Created by Lance on 2016-03-11.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import { matchEnum } from "./utility/Toolbox";
import RelationshipStatus from "../model/enum/RelationshipStatus";

const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

/**
 * @namespace validation
 */

/**
 * @module RelationshipValidation
 * @memberof validation
 */

/**
 * Verify the status.
 * @alias module:RelationshipValidation.verifyStatus
 * @param {number|model.RelationshipStatus} status - The enum RelationshipStatus.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyStatus(status) {

  /**
   * Check whether the type variable matches the values of enum RelationshipStatus.
   * @function isStatusEnumRelationshipStatus
   * @param {number|model.RelationshipStatus} status - The enum RelationshipStatus.
   * @returns {Validation} An Validation object containing the results.
   */
  function isStatusEnumRelationshipStatus(status) {
    return matchEnum(status, RelationshipStatus, [new ValidationError(
      1100,
      "Status has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isStatusEnumRelationshipStatus(status));
}

