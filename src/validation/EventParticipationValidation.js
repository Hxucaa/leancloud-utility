/**
 * Created by Lance on 2016-03-11.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import { matchEnum } from "./utility/Toolbox";
import EventParticipationStatus from "../model/enum/EventParticipationStatus";

const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

/**
 * @namespace validation
 */

/**
 * @module EventParticipationValidation
 * @memberof validation
 */

/**
 * Verify the status.
 * @alias module:EventParticipationValidation.verifyStatus
 * @param {number|model.EventParticipationStatus} status - The enum EventParticipationStatus.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyStatus(status) {

  /**
   * Check whether the type variable matches the values of enum EventParticipationStatus.
   * @function isStatusEnumEventParticipationStatus
   * @param {number|model.EventParticipationStatus} status - The enum EventParticipationStatus.
   * @returns {Validation} An Validation object containing the results.
   */
  function isStatusEnumEventParticipationStatus(status) {
    return matchEnum(status, EventParticipationStatus, [new ValidationError(
      1100,
      "Status has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isStatusEnumEventParticipationStatus(status));
}
