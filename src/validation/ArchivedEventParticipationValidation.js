/**
 * Created by Lance on 2016-03-11.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import { matchEnum } from "./utility/Toolbox";
import ArchivedEventParticipationStatus from "../model/enum/ArchivedEventParticipationStatus";

const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

/**
 * @namespace validation
 */

/**
 * @module ArchivedEventParticipationValidation
 * @memberof validation
 */

/**
 * Verify the status.
 * @alias module:ArchivedEventParticipationValidation.verifyStatus
 * @param {number|model.ArchivedEventParticipationStatus} status - The enum ArchivedEventParticipationStatus.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyStatus(status) {

  /**
   * Check whether the type variable matches the values of enum ArchivedEventParticipationStatus.
   * @function isStatusEnumArchivedEventParticipationStatus
   * @param {number|model.ArchivedEventParticipationStatus} status - The enum ArchivedEventParticipationStatus.
   * @returns {Validation} An Validation object containing the results.
   */
  function isStatusEnumArchivedEventParticipationStatus(status) {
    return matchEnum(status, ArchivedEventParticipationStatus, [new ValidationError(
      1100,
      "Status has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isStatusEnumArchivedEventParticipationStatus(status));
}
