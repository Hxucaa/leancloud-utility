/**
 * Created by Lance on 2016-03-11.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import { matchEnum } from "./utility/Toolbox";
import EventType from "../model/enum/EventType";
import ArchivedEventStatus from "../model/enum/ArchivedEventStatus";

const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

/**
 * @namespace validation
 */

/**
 * @module ArchivedEventValidation
 * @memberof validation
 */

/**
 * Verify the event type.
 * @alias module:ArchivedEventValidation.verifyEventType
 * @param {number|model.EventType} type - The enum EventType.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyEventType(type) {

  /**
   * Check whether the type variable matches the values of enum EventType.
   * @function isTypeEnumEventType
   * @param {number|model.EventType} type - The enum EventType.
   * @returns {Validation} An Validation object containing the results.
   */
  function isTypeEnumEventType(type) {
    return matchEnum(type, EventType, [new ValidationError(
      1100,
      "Type has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isTypeEnumEventType(type));
}

/**
 * Verify the status.
 * @alias module:ArchivedEventValidation.verifyStatus
 * @param {number|model.ArchivedEventStatus} status - The enum ArchivedEventStatus.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyStatus(status) {

  /**
   * Check whether the type variable matches the values of enum ArchivedEventStatus.
   * @function isStatusEnumArchivedEventStatus
   * @param {number|model.ArchivedEventStatus} status - The enum ArchivedEventStatus.
   * @returns {Validation} An Validation object containing the results.
   */
  function isStatusEnumArchivedEventStatus(status) {
    return matchEnum(status, ArchivedEventStatus, [new ValidationError(
      1100,
      "Status has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isStatusEnumArchivedEventStatus(status));
}

